import { Component, OnInit } from '@angular/core';
import { Profile } from '../../shared/models/profile';
import { ProfileService } from '../../services/profile.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profile: Profile = {} as Profile;
  editing = false;

  constructor(
    private profileService: ProfileService) {}

  ngOnInit(){
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (data: Profile) => {
        this.profile = data;
      },
      error: (error: any) => {
        console.error('Error fetching profile:', error);
      }
    });
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  updateProfile(): void {
    const formData = new FormData();
    formData.append('profile[bio]', this.profile.bio);
  }
}
