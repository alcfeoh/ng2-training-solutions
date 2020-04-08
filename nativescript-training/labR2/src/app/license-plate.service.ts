import { Injectable } from '@angular/core';
import {LicensePlate} from "~/app/license-plate";
import {LICENSE_PLATES} from "~/app/mock-data";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(private http: HttpClient) { }

  getList(): Observable<LicensePlate[]> {
      return this.http.get<LicensePlate[]>("https://lp-store.herokuapp.com/data");
  }
}
