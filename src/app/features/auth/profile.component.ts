import { Component, OnInit } from '@angular/core';
import { Profile } from '../../shared/models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: Profile = {} as Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(): void {
    this.profileService.getProfile().subscribe(
      profile => {
        this.profile = profile;
      },
      error => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(
      updatedProfile => {
        this.profile = updatedProfile;
        console.log('Profile updated successfully:', updatedProfile);
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
