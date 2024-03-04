import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  });

  errors:string[] = [];

  constructor(private authService:AuthenticationService, private router:Router){}

  onSignUp(){
    const formValue = this.signupForm.value;

    this.authService.signUp(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login']);
      },
      error: (error:any) => {
        console.log(error.error);
        this.errors = error.error;
      }
    });
  }
}
