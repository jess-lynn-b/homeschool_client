import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);
  // private tokenExpTimer: any;

  constructor(private http:HttpClient, private router:Router, private userService:UserService) {}

  // sent POST request to server to log in the user

  login(username:string, password:string){
    return this.http.post<{token: string}>(`${environment.apiUrl}/login`, {
      username,
      password,
    });
  }

  //send a POST request to the server to signup the user

  signUp(formData:any){
    return this.http.post(`${environment.apiUrl}/users`, formData);
    }


  setToken(token:string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return !!this.getToken();
  }

  logout(){
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}
