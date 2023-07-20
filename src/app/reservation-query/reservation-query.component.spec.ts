import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationQueryComponent } from './reservation-query.component';

describe('ReservationInquiryComponent', () => {
  let component: ReservationQueryComponent;
  let fixture: ComponentFixture<ReservationQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationQueryComponent]
    });
    fixture = TestBed.createComponent(ReservationQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
