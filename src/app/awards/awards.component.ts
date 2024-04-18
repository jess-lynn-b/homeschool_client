import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AwardService } from '../services/awards.service';

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
  awards: any[] = [];
  title: string = '';
  description: string = '';
  image: any;

  constructor(private http: HttpClient, private awardService: AwardService) {}

  ngOnInit(): void {
     this.fetchAwards();
  }
  fetchAwards(): void {
    this.awardService.fetchAwardsWithImages().subscribe(
      (awards: any[]) => {
        this.awards = awards;
        console.log(this.awards)
      },
      error => {
        console.error('Failed to fetch awards:', error);
      }
    );
    }
    handleImageError(event: any){
      console.error('Error loading image:', event);

    }

  handleFileInput(event: any): void {
    this.fileToUpload = event.target.files[0];
  }

  uploadFile(): void {
    if (!this.title || !this.description || !this.fileToUpload) {
      console.error('Please provide title, description, and select a file.');
      return;
    }
    const formData: FormData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('images', this.fileToUpload);

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

  deleteAward(awardId: number): void {
    this.awardService.deleteAward(awardId).subscribe(
      () => {
        console.log('Award deleted successfully');
        // Optionally, refresh the awards list after deletion
        // this.fetchAwards();
      },
      (error) => {
        console.error('Failed to delete award:', error);
      }
    );
  }
}


