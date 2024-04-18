import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  }
  getAwardById(id: number): Observable<Award> {
    return this.http.get<Award>(`${environment.apiUrl}/awards`);
  }

  uploadAward(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/awards`, formData);
  }

  deleteAward(awardId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/awards/${awardId}`);
  }

}
