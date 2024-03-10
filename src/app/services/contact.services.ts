import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://formsubmit.co/jcp.stylist.jess@gmail.com'
  public response = 'Thank you for your submission!'
  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: 'Please try again!') => {
          return error;
        }
      )
    )
  }
}


