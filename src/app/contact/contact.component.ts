import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  infoForm!: FormGroup;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(){
    this.infoForm = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    if (this.infoForm.valid) {
      console.log("Submitting form: " , this.infoForm.value);
    } else {
    } console.error("Form is invalid");
  }
}

