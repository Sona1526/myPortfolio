import { Component, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { datas } from '../data/hotel-data'; //whole hotel data stored here
import { Hotel } from '../data/hotel.model'; //whole hotel data stored here
import { OnInit } from '@angular/core';
import {ActivatedRoute ,RouterModule  } from '@angular/router';
import { FormArrayName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HotelBookingNavbarComponent } from "../hotel-booking-navbar/hotel-booking-navbar.component";
import { HotelBookingFooterComponent } from "../hotel-booking-footer/hotel-booking-footer.component";
declare var bootstrap: any;
@Component({
  selector: 'app-hoteldetails',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HotelBookingNavbarComponent, HotelBookingFooterComponent],
  standalone: true,
  templateUrl: './hoteldetails.component.html',
  styleUrl: './hoteldetails.component.scss'
})
export class HoteldetailsComponent implements OnInit{

    imageList= [
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg'},
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg'},
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg'},
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg'},
    { src: 'hotelbookingimages/tajmahal.jpg' },
    { src: 'hotelbookingimages/tajmahal.jpg' }

  ];


  hotelList: Hotel[] = datas;
  detail: Hotel |undefined;
  totalPrice: Hotel |undefined;
  ratings:boolean =false;
  hotelListCount:number=0;
  ogPrice:number=0;
  discountPrice:number=0;
  discountPercentage:number=0;
  roomTypes: any;

  //star
    getStars(count:number | undefined): any[] {
    const validRating =Math.floor(Number(count));
    return Array(validRating);
  }
  // For getting id from url using--- constructor(private route: ActivatedRoute){}
  constructor(private route: ActivatedRoute,private router: Router ) {}

  // room selecting input
  roomOptions:number[]=[0,1,2,3,4,5,6];
  noOfRooms:number[]= [];
  noOfRoom: number | undefined;
  total:number | undefined;

  onRoomChange(index: number) {
    const selectedValue = this.noOfRooms[index];
    if (selectedValue !== null && selectedValue !== undefined) {
      this.total = this.noOfRooms.reduce((sum, value) => sum + Number(value || 0), 0);
      console.log('Total number of rooms:', this.total);
      // this.totalPrice =
    }
  }

  // initial
  ngOnInit() {
    // room selecting input
    const totalRooms =3;
    for (let i = 0; i <totalRooms; i++) {
      this.noOfRooms[i] = 0; // Default value is 0
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.hotelListCount = this.hotelList.length;
    this.detail =this.hotelList.find(hotel => hotel.id ===id);
  }

  //after booking clicked*******
  roomNameNos:any=[];
  booking(roomForm: NgForm){
    if(roomForm.valid){
      const noOfRoomsSelected = this.noOfRooms.some(count => count >0);
      if(noOfRoomsSelected){
        this.detail?.roomTypes?.forEach((roomType, index) => {
          const selectedCount = this.noOfRooms[index];
          if (selectedCount && selectedCount > 0) {
            this.roomNameNos.push({roomName: roomType.name,
              roomsBooked: selectedCount});
            // console.log(roomType.name,selectedCount);
            localStorage.setItem('roomNameNos',JSON.stringify(this.roomNameNos));

          }
        });
        console.log("in local" ,localStorage.getItem('roomNameNos'));
      //  this.router.navigate(['/booking']);
      }
    }
  }










}


