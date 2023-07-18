import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRoomComponent } from './about-room.component';

describe('AboutRoomComponent', () => {
  let component: AboutRoomComponent;
  let fixture: ComponentFixture<AboutRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRoomComponent]
    });
    fixture = TestBed.createComponent(AboutRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
