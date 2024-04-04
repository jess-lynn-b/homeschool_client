import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourTrackingService{

  private apiUrl = 'http://homeschool_new_api.com/hour_trackings';

  constructor(private http: HttpClient) {}

  getHourTrackings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred while fetching hour trackings.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = 'Error: ${error.error.message}';
    } else {
      // Server-side error
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
