import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingNavbarComponent } from './hotel-booking-navbar.component';

describe('HotelBookingNavbarComponent', () => {
  let component: HotelBookingNavbarComponent;
  let fixture: ComponentFixture<HotelBookingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookingNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
