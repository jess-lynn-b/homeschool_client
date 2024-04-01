import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourTrackingService{

  private apiUrl = 'http://homeschool_new_api.com/hour_trackings';

  constructor(private http: HttpClient) {}

  getHourTrackings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
