import { Component, ViewChild, ElementRef,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { datas } from '../data/hotel-data'; // for data
import { Hotel } from '../data/hotel.model';// for data
import { DataService } from '../services/data.service'; // service
import { Router } from '@angular/router'; //routing
// for date pick
import { MatDatepickerModule, MatDateRangeInput } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule,provideNativeDateAdapter } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotelBookingNavbarComponent } from "../hotel-booking-navbar/hotel-booking-navbar.component";
import { HotelBookingFooterComponent } from '../hotel-booking-footer/hotel-booking-footer.component';
// import {ChangeDetectionStrategy} from '@angular/core';
// import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-hotelbooking',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDateRangeInput,
     HotelBookingNavbarComponent,HotelBookingFooterComponent],
            changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './hotelbooking.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './hotelbooking.component.scss'
})
export class HotelbookingComponent implements OnInit {

  /*************home search inputs***************/
  hotelList: Hotel[] = datas;
  // send data from search result to hotel component
  constructor(private dataService: DataService, private router: Router) {} //constructor for dataservice ,router


  place='';
  checkin :Date | null = null;
  checkout : Date | null = null;
  pets=false;

  myFilter = (d: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day
    return d ? d >= today : false;
  };

  adult = 2;
  children = 0;
  room = 1;
  minValues = {
    adult: 1,
    children: 0,
    room: 1
  };
  increment(field: 'adult' | 'children' | 'room') {
    this[field]++;
  }

  decrement(field: 'adult' | 'children' | 'room') {
    if (this[field] > this.minValues[field]) {
      this[field]--;
    }
  }
  submitted = false;
  hotelListCount =0;
  hotelSiteSearch: Hotel |undefined;
  sendMessage(inputform: NgForm) {
    this.submitted = true;
    // console.log(this.place,this.adult,this.children,this.room,this.pets,this.checkin,this.checkout);
    // this.dataService.updateMessage(this.place); //message send to hotels
    this.hotelListCount = this.hotelList.length;
    this.hotelSiteSearch =this.hotelList.find(hotel => hotel.site ===this.place);
    if(this.place && this.hotelSiteSearch!==undefined ){
      localStorage.setItem('receivedMessage', this.place.toLowerCase());
      localStorage.setItem('searchedinputs', JSON.stringify(inputform.value));
      this.router.navigate(['/hotels']); //  Redirect to hotels
    }

  }






  /*************Browse By property name***************/
  properties = [
    { name: "Hotels", image: "tajmahal.jpg" },
    { name: "Apartments", image: "apartment.jpg" },
    { name: "Resorts", image: "resort.jpg" },
    { name: "Villas", image: "villa.jpg" },
    { name: "Cabins", image: "cabin.jpg" },
    { name: "Cottages", image: "cabin.jpg" },
    { name: "Glamping Sites", image: "cabin.jpg" },
    { name: "Tent Stays", image: "cabin.jpg" },
    { name: "Service Apartments", image: "cabin.jpg" },
    { name: "Holiday Homes", image: "cabin.jpg" },
    { name: "Guest Houses", image: "cabin.jpg" },
    { name: "Hostels", image: "cabin.jpg" },
    { name: "Motels", image: "cabin.jpg" }
  ];
  destinations = [
    { name: "New Delhi", image: "tajmahal.jpg" },
    { name: "Mumbai", image: "apartment.jpg" },
    { name: "Goa", image: "resort.jpg" },
    { name: "Bangalore", image: "villa.jpg" },
    { name: "Jaipur", image: "cabin.jpg" },
    { name: "Puducherry", image: "cabin.jpg" },
    { name: "Chennai", image: "cabin.jpg" },
    { name: "Guragon", image: "cabin.jpg" }

  ];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef;
  @ViewChild('scrollContainer2', { static: false }) scrollContainer2!: ElementRef;
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  /*************pick a Vibe******************/
  types:any=[
    { name: "Beach", image: "tajmahal.jpg", typePlace:["varkala","marina","kovalam","patnam","palvem","palolem","agonda","bendium"] },
    { name: "Outdoor", image: "apartment.jpg", typePlace: ["Munnar", "Coorg", "Ooty", "Manali", "Ladakh", "Wayanad", "Shimla", "Kodaikanal"] },
    { name: "Relax", image: "resort.jpg", typePlace: ["Alleppey", "Kumarakom", "Rishikesh", "Pondicherry", "Gokarna", "Mahabalipuram", "Varkala", "Darjeeling"]},
    { name: "Romance", image: "villa.jpg", typePlace: ["Udaipur", "Shimla", "Manali", "Goa", "Munnar", "Kumarakom", "Jaipur", "Kodaikanal"] },
    { name: "Food", image: "cabin.jpg", typePlace: ["Amritsar", "Delhi", "Kolkata", "Hyderabad", "Chennai", "Lucknow", "Mumbai", "Ahmedabad"] },
  ];
  typePlaces:string[]=[];
  selectedTypeName:string ='';
  animationfade='';

  typeClick(typeName:string){
    this.selectedTypeName = typeName;
    const selectedType = this.types.find((type:{name:string}) => type.name === typeName);
    this.animationfade='';
        if(selectedType){
          this.typePlaces=selectedType.typePlace;
          setTimeout(() => {
            const container = document.getElementById('typePlacesContainer');
            if (container) {
              container.scrollLeft = 0;
            }
          }, 0);
          setTimeout(() => {
            this.animationfade = 'animationFadeContainer';
          }, 10);
        }
  }
  //starting value for pick a vibe btn
  ngOnInit(): void {
    // CHECKin checkout dates initial
    const today = new Date();
    this.checkin = today;

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.checkout = tomorrow;

    //picka vibecontent
    if(this.types.length>0){
      this.selectedTypeName= this.types[0].name;
      this.typePlaces = this.types[0].typePlace;
    }
  }









  // footer
  currentYear: number = new Date().getFullYear();


}
