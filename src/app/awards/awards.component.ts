import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { AwardService } from '../services/awards.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule, RouterModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
// const uploadForm = document.querySelector('.upload')

export class AwardsComponent{

  fileToUpload: File | null = null;
  uploadProgress: number = 0;

  constructor(private http: HttpClient, private userService: UserService, public authenticationService: AuthenticationService, private router: Router, private awardService: AwardService) {}

  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files.item(0);
    } else {
      this.fileToUpload = null;
    }
  }

  uploadFile(): void {
    if (!this.fileToUpload) {
      console.error('No file selected for upload.');
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.http.post<any>('http://homeschool_new_api.com/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total !== undefined) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        }
      } else if (event instanceof HttpResponse) {
        console.log('File upload complete.', event.body);
        // Handle response after successful upload
      }
    }, error => {
      console.error('File upload failed:', error);
    });
  }
}
