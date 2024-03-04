import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isError:boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup ({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

  login(){
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.passsword).subscribe({
        next: (res:any) => {
          console.log('Logged in with token:', res.token);
          this.authService.setToken(res.token);
          this.router.navigate(['/']);
        },
        error: (error:any) => {
          console.log('Error when loggin in', error);
          this.isError = true;
        },
      });
    }
  }
}
