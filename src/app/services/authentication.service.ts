import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string){
    return this.http.post<{ token:string}>(`${environment.apiUrl}/login`, {
      username,
      password,
    });
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return !!this.getToken();
  }

  register(username: string, password: string) {
    return this.http.post<>(
      REGISTER_URL,
      {
      username: username,
      password: password,
      returnSecureToken: true
    }
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
