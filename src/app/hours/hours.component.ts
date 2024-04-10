import { Component, ElementRef, OnInit} from '@angular/core';
import { HourTrackingService } from '../services/hourtracking.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hour } from '../shared/models/hour';


@Component({
  selector: 'app-hours',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})

export class HoursComponent implements OnInit{
  hourForm!: FormGroup;
  hours: Hour[] = [];
  errorMessage: string = '';
  // hourTrackings: any;
  // hoursForm!: FormGroup<any>;

  constructor(private hourTrackingService: HourTrackingService, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.hourForm = new FormGroup({
      date: new FormControl('', Validators.required), // Example form control with validation
      task: new FormControl('', Validators.required),
      hours: new FormControl(0, Validators.required), // Default value with validation
      minutes: new FormControl(0, Validators.required),
      notes: new FormControl('')
    });
    this.fetchHours();
    // throw new Error('Method not implemented.');
  }

  fetchHours(): void {
    this.hourTrackingService.getAllHours()
      .subscribe(
        (data: Hour[]) => {
          this.hours = data;
        },
        (error) => {
          console.error('Error fetching hours:', error);
        }
      );
  }
  editHour(hour: Hour): void {
    console.log('Editing hour:', hour);
  }
  deleteHour(hourId: number): void {
    if (confirm('Are you sure you want to delete this hour?')) {
      this.hourTrackingService.deleteHour(hourId)
        .subscribe(
          () => {
            console.log('Hour deleted successfully');
            this.fetchHours();
          },
          (error) => {
            console.error('Error deleting hour:', error);
          }
        );
    }
  }

  onSubmit(): void{
    if (this.hourForm.valid) {
      const formData = this.hourForm.value;
      console.log('Form submitted:', FormData)

      this.hourTrackingService.createHour(
        formData.date,
        formData.task,
        formData.hours,
        formData.minutes,
        formData.notes
      )
        .subscribe(
          (response) => {
            console.log('Form submission successful:', response);
            // Reset the form or perform other actions after successful creation
            this.hourForm.reset();
          },
          (error) => {
            console.error('Error submitting form:', error);
            // Handle error response (e.g., display error message to user)
          }
        );
    }
  }
}
