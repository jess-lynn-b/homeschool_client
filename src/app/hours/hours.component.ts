import { Component, OnInit } from '@angular/core';
import { HourTrackingService } from '../services/hourtracking.service';
import { CommonModule } from '@angular/common';

// interface HourTrackingFormData {
//   date: string;
//   task: string;
//   time: string;
//   hours: string;
//   minutes: string;
//   notes: string;
// }
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-hours',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.scss'
})
export class HoursComponent implements OnInit{
  hourTrackings!: any[];

  constructor(private hourTrackingService: HourTrackingService){}

  ngOnInit(): void {
    this.getHourTrackings();
  }

  getHourTrackings(){
    this.hourTrackingService.getHourTrackings()
      .subscribe(
        data => {
          this.hourTrackings = data;
        },
        error => {
          console.error('Eror fetching hour trackings:', error);
        }
      );
  }
}
