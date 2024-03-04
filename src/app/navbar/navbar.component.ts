import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isSidebarVisible:boolean = false;
  currentUser: User | null = null;

  constructor(public authService: AuthenticationService, private userService:UserService){}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      this.currentUser = user;
    });
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  logout(){
    if (this.isSidebarVisible){
      this.toggleSidebar();
    }
    this.authService.logout();
    this.userService.setCurrentUser(null);
  }

  toggleSidebar(){
    this.isSidebarVisible = !this.isSidebarVisible;
  // }
  // onRoute(route:string) {
  //   return this.router.url.includes(route);
 }
}
