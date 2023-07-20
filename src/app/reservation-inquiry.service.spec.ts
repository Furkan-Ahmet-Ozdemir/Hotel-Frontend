import { TestBed } from '@angular/core/testing';

import { ReservationQueryService } from './reservation-inquiry.service';

describe('ReservationInquiryService', () => {
  let service: ReservationQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
