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
  private tokenExpTimer: any;

  constructor(private http:HttpClient, private router:Router) {}

  login(username:string, password:string){
    return this.http.post(`${environment.apiUrl}/login`, {
      username,
      password,
    });
  }
  signUp(username:string, first_name:string, last_name:string, password:string, password_confirmation:string){
    return this.http.post(`${environment.apiUrl}/login/signup`, {
      username,
      first_name,
      last_name,
      password,
      password_confirmation
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

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
