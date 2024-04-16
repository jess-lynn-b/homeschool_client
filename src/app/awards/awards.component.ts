import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AwardService } from '../services/awards.service';
import { Award } from '../shared/models/award';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})

export class AwardsComponent implements OnInit{
  fileToUpload: File | null = null;
  uploadProgress: number = 0;
  imageUrl: string | undefined;
  awards: Award[] = [];
  title: string = '';
  description: string = '';

  constructor(private http: HttpClient, private awardService: AwardService) {}

  ngOnInit(): void {
    this.fetchAwards();
  }

  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files.item(0);
    } else {
      this.fileToUpload = null;
    }
  }

  uploadFile(): void {
    if (!this.title || !this.description || !this.fileToUpload) {
      console.error('Please provide title, description, and select a file.');
      return;
    }
    const formData: FormData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('images', this.fileToUpload)

    this.awardService.uploadAward(formData).subscribe(
      (response) => {
        console.log('Award created successfully:', response);
        // Reset form fields after successful upload
        this.title = '';
        this.description = '';
        this.fileToUpload = null;
      },
      (error) => {
        console.error('Failed to create award:', error);
      }
    );
  }
  fetchAwards(): void {
  this.awardService.fetchAwardsWithImages().subscribe(
    (awards: Award[]) => {
      this.awards = awards;
    },
    error => {
      console.error('Failed to fetch award:', error);
    }
  );
  }
}


