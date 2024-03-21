import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
  });

  errors: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSignUp() {
    // console.log('calling works')
    if (this.signupForm.valid) {
      const email = this.signupForm.value.email;
      const username = this.signupForm.value.username;
      const password = this.signupForm.value.password;
      const password_confirmation = this.signupForm.value.password_confirmation;

      this.authService
        .signUp(
          email,
          username,
          password,
          password_confirmation
        )
        .subscribe({
          next: (res: any) => {
            this.router.navigate(['/login']);
          },
          error: (error: any) => {
            console.log('Error signing up', error);
          },
        });
    }
  }
}
