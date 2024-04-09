import { Component, OnInit } from '@angular/core';
import { HourTrackingService } from '../services/hourtracking.service';
import { CommonModule } from '@angular/common';
import { AsyncValidatorFn, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, delay, map, of } from 'rxjs';



@Component({
  selector: 'app-hours',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})

export class HoursComponent implements OnInit{
  errorMessage: string = '';
  hourTrackings: any;
  hoursForm!: FormGroup<any>;

  constructor(private hourTrackingService: HourTrackingService, private fb: FormBuilder, private router: Router){}
//   this.hoursForm = this.fb.group({
//     date: ['', Validators.required],
//     task: ['', Validators.required],
//     hours: ['', [Validators.required,Validators.min(0)], [this.asyncHoursValidator()]],
//     minutes: ['', [Validators.required, Validators.min(0), Validators.max(59)], [this.asyncHoursValidator()]],
//     notes: ['']
//     });
//   }


//  // Asynchronous validator for 'hours' field
//  asyncHoursValidator(): AsyncValidatorFn {
//   return (control) => {
//     return this.validateAsyncHours(control.value).pipe(
//       map((isValid: boolean) => {
//         return isValid ? null : { invalidHours: true };
//       })
//     );
//   };
// }

// // Asynchronous validator for 'minutes' field
// asyncMinutesValidator(): AsyncValidatorFn {
//   return (control) => {
//     return this.validateAsyncMinutes(control.value).pipe(
//       map((isValid: boolean) => {
//         return isValid ? null : { invalidMinutes: true };
//       })
//     );
//   };
// }
//  // Simulated asynchronous validation for 'hours' field
//  validateAsyncHours(hours: any): Observable<boolean> {
//   // Simulated async operation (e.g., HTTP request) with delay
//   return of(hours >= 0).pipe(delay(1000)); // Replace with actual async validation logic
// }
//   // Simulated asynchronous validation for 'minutes' field
//   validateAsyncMinutes(minutes: any): Observable<boolean> {
//     // Simulated async operation (e.g., HTTP request) with delay
//     return of(minutes >= 0 && minutes <= 59).pipe(delay(1000)); // Replace with actual async validation logic
//   }


onSubmit(date: string, task: string, hoursInput: HTMLInputElement, minutesInput: HTMLInputElement, notes: string): void{
  const hours: number = parseFloat(hoursInput.value);
  const minutes: number = parseFloat(minutesInput.value);
    const formData = {
      hour_tracking: {
        date: date,
        task: task,
        hours: hours,
        minutes: minutes,
        notes: notes
      }
    };
      this.hourTrackingService.createHour(formData)
        .subscribe(
          (response) => {
            console.log('Task created successfully:', response);
            // Reset the form or perform other actions after successful creation
            this.hoursForm.reset();
          },
          (error) => {
            // console.error('Error creating task:', error);
            // Handle error response (e.g., display error message to user)
          }
        );
    }
  ngOnInit(): void {
    this.hourTrackingService.getHourTrackings;
    // throw new Error('Method not implemented.');
  }
  // onSubmit(date: string, task: string, hoursInput: HTMLInputElement, minutesInput: HTMLInputElement, notes: string): void{
  //   const hours: number = parseFloat(hoursInput.value);
  //   const minutes: number = parseFloat(minutesInput.value);

  //   if (isNaN(hours) || isNaN(minutes)){
  //     console.error('Invalid hours or minutes entered');
  //     return;
  //   }
    // const formValue = this.hoursForm.value
    // console.log(formValue, 'this is my value');

    // this.hourTrackingService.createHour(this.hoursForm)
    // .subscribe({
    //   next: (res: any) => {
    //     this.router.navigate(['/home'])
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // })
}

