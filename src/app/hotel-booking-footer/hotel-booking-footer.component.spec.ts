import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingFooterComponent } from './hotel-booking-footer.component';

describe('HotelBookingFooterComponent', () => {
  let component: HotelBookingFooterComponent;
  let fixture: ComponentFixture<HotelBookingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookingFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
