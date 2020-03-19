import { Injectable } from '@angular/core';
import {LicensePlate} from "./license-plate";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(private http: HttpClient) { }

  getList(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/data');
  }
}
