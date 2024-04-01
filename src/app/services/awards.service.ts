import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Award } from "../shared/models/award";

@Injectable({
  providedIn: 'root'
})
export class AwardService {
  constructor(private http: HttpClient){}

  getAward(): Observable<Award> {
    return this.http.get<Award>('${environment.apiUrl}/award');
  }
}
