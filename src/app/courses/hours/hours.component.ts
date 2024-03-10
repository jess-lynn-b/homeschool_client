import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'],
  providers: [HourFormComponent]
})

export class HourFormComponent implements OnInit {
  constructor(private taskService: TaskService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    )
  }
}
