import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { AwardService } from '../services/awards.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule, RouterModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
// const uploadForm = document.querySelector('.upload')

export class AwardsComponent{

  constructor(private http: HttpClient, private userService: UserService, public authenticationService: AuthenticationService, private router: Router, private awardService: AwardService) {
    // uploadForm.addEventListner('submit', function(e){
    //   e.preventDefault()
    //   let file = e.target.uploadFile.files[0]
    // })
  }
}
