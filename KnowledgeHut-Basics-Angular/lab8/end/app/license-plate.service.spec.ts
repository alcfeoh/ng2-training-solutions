import { TestBed } from '@angular/core/testing';

import { LicensePlateService } from './license-plate.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {LICENSE_PLATES} from "./mock-data";

export const FAKE_HTTP_CLIENT = {
  get: (url) => of(LICENSE_PLATES)
} as HttpClient;

describe('LicensePlateService', () => {
  let service: LicensePlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: FAKE_HTTP_CLIENT}]
    });
    service = TestBed.inject(LicensePlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable that returns 8 license plates', () => {
    service.getList().subscribe(plates => {
      expect(plates.length).toBe(8);
    });
  });
});
