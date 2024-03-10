import { Injectable } from "@angular/core";
import { Task } from "../shared/models/task";
import { Subject } from "rxjs";
import { Courses } from "../shared/models/courses";

@Injectable ({
  providedIn: 'root'
})

export class TaskService {
  addTask = new Subject<Task[]>
();
  tasksChanged = new Subject<Task[]>();
  addList = new Subject<Courses>();
  listsChanged = new Subject<Courses[]>();

  private tasks: Task[] = [
    new Task( 'Algerbra','no', Date)
  ]
  private lists: Courses[] =[
    new Courses( 'Algerbra', 1.0)
  ]
  constructor() {}

  getTasks(){
    return this.tasks.slice();
  }
  createTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }
  getList(){
    return this.lists.slice();
  }
  createList(list: Courses){
    // send web request to create a list
   this.lists.push(list);
   this.listsChanged.next(this.lists.slice());
  }
}
