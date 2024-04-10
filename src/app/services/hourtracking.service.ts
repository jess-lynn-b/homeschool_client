import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
// import { environment } from '../../environments/environment.prod';
import { environment } from '../../environments/environment';
import { Hour } from '../shared/models/hour';

@Injectable({
  providedIn: 'root'
})
export class HourTrackingService{

  //  private apiUrl = 'https://homeschool-new-api.onrender.com/hours';
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createHour(date: string, task: string, hours: number, minutes: number, notes: string): Observable<any>{
    const formData = {
      hour_tracking: {
        date,
        task,
        hours,
        minutes,
        notes
      }
    };
    return this.http.post<any>(`${this.apiUrl}/hours`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllHours(): Observable<Hour[]> {
    return this.http.get<Hour[]>(`${this.apiUrl}/hours`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteHour(hourId: number): Observable<void> {
    const url = `${this.apiUrl}/hours/${hourId}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
      console.error('An error occurred:', error);

      return throwError('Something bad happened; please try again later.');
  }
}
