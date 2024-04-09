import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserBehaviorSubject = new BehaviorSubject<User | null> ( null);

  constructor(private http:HttpClient){}

  setCurrentUser(user: User | null) {
    this.currentUserBehaviorSubject.next(user);
  }
}
