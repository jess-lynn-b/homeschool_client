import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoggingIn:boolean = true;
  loginForm:FormGroup = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
  });
  signUpForm:FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(){
    console.log('login is called');
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.login(username, password).subscribe({
        next: (response:any) => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        error: (error:any) => {
          console.log('Error loggin in', error);
        }
      });
    }
  }

  signup(){
    if (this.signUpForm.valid) {
      const username = this.signUpForm.value.username;
      const first_name = this.signUpForm.value.first_name;
      const last_name = this.signUpForm.value.last_name;
      const password = this.signUpForm.value.password;
      const password_confirmation = this.signUpForm.value.password_confirmation;

      this.authService.signUp(username, first_name, last_name, password, password_confirmation).subscribe({
        next: (response:any) => {
          console.log(response);
          this.isLoggingIn = true;
        },
        error: (error:any) => {
          console.log('Error signing up', error);
        }
      });
    }
  }

  switchLoginOrSignup(option:string) {
    switch (option) {
      case 'login' :
        this.isLoggingIn = true;
        break;
      case 'sign-up':
        this.isLoggingIn = false;
        break;
    }
  }
}
