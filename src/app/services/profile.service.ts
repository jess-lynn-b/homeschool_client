import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../shared/models/profile'; // Import the Profile model

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://homeschool_new_api/profile'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.apiUrl);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.apiUrl, profile);
  }
}
