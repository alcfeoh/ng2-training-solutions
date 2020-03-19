import { TestBed } from '@angular/core/testing';

import { LicensePlateService } from './license-plate.service';

describe('LicensePlateService', () => {
  let service: LicensePlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicensePlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of 8 license plates', () => {
    const plates = service.getList();
    expect(plates.length).toBe(8);
  });
});
