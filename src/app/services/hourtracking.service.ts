import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
// import { environment } from '../../environments/environment.prod';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HourTrackingService{

  //  private apiUrl = 'https://homeschool-new-api.onrender.com/hours';
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createHour(formData: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/hours`, FormData)
    .pipe(
      catchError(this.handleError)
    );
  }

  getHourTrackings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hours`)
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // console.error(
      //   `Backend returned code ${error.status},` +
      //   `body was: ${error.error}`);
    }
      return throwError('Something bad happened; please try again later.');
  }
}
