import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-confirmation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.scss'
})
export class BookingConfirmationComponent implements OnInit{
  customerDetails:any;
  ngOnInit() {
    const storedDetails = localStorage.getItem('customerDetails');
    if (storedDetails) {
      this.customerDetails = JSON.parse(storedDetails);
       console.log('Customer Details:', this.customerDetails);
    } else {
      console.error('No customer details found!');
    }
  }
}
