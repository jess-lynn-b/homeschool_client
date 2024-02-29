import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});
  isLoginMode = true;
  errorMsg: string | null = null;

constructor(private authService: AuthenticationService, private router: Router) {}

  login(){
    console.log('login is called');
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if (this.isLoginMode) {
        const authObsv = this.authService.login(username, password);
      } else {
        const authObsv = this.authService.register (username, password)
      }

      authObsv.subscribe({
        next: (resData) => {
          
        }
      })

      // this.authService.login(username, password).subscribe({
      //   next: (response:any) => {
      //     console.log(response);
      //     this.router.navigate(['/students']);
      //   },
      //   error: (error: any) => {
      //     console.log('Login error', error);
      //   }
      // });
    }
  }
}
