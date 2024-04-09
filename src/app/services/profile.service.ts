import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Profile } from '../shared/models/profile'; // Import the Profile model
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUpdsted = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${environment.apiUrl}/profile`) ;
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.http.put<any>(`$enviorment.apiUrl}/profile`, profile).pipe(
      tap(() => {
        this.profileUpdsted.emit();
      })
    );
  }
}
