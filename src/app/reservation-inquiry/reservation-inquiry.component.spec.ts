import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationInquiryComponent } from './reservation-inquiry.component';

describe('ReservationInquiryComponent', () => {
  let component: ReservationInquiryComponent;
  let fixture: ComponentFixture<ReservationInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationInquiryComponent]
    });
    fixture = TestBed.createComponent(ReservationInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
