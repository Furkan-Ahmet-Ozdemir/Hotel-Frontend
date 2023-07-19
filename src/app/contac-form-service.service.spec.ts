import { TestBed } from '@angular/core/testing';

import { ContacFormServiceService } from './contac-form-service.service';

describe('ContacFormServiceService', () => {
  let service: ContacFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
