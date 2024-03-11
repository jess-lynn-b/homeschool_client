import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [HoursComponent],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.scss'
})
export class HoursComponent implements OnInit{
  constructor(private taskService: TaskService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    )
  }
}
