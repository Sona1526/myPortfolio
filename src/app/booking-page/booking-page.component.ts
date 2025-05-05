import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent {
  bookingDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '',
    rooms: '',
    specialRequests: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}
  customerDetails={};
  submitBooking(forms: any) {
    if(forms.valid) {
      // console.log('Booking Details:', this.bookingDetails);
      localStorage.setItem('customerDetails',JSON.stringify(this.bookingDetails));
      this.router.navigate(['/booking-confirmation']);
    }else {
      alert('Please fill all required fields.');
    }
  }
}
