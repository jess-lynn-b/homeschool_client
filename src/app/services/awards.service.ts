import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from "../../environments/environment";
import { Award } from "../shared/models/award";

@Injectable({
  providedIn: 'root'
})
export class AwardService {
  constructor(private http: HttpClient){}

  createAward(awardData: any) {
    return this.http.post(`${environment.apiUrl}/awards`, { award: awardData });
  }

  fetchAwardsWithImages(): Observable<Award[]> {
    return this.http.get<Award[]>(`${environment.apiUrl}/awards`)
    //.pipe(
    //   catchError((error: any) => {
    //     console.error('Error fetching award:', error);
    //     return throwError('Something went wrong with getting previous awards.');
    //   })
    // );
  }

  uploadAward(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/awards`, formData);
  }

}
