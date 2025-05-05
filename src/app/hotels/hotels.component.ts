import { Component , Inject, OnInit, PLATFORM_ID} from '@angular/core'; //local storage Inject,Platform id
import { DataService } from '../services/data.service'; //dataservice
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule,isPlatformBrowser  } from '@angular/common'; //local storage isPlatformBrowser
import { datas } from '../data/hotel-data'; //whole hotel data stored here
import { Hotel } from '../data/hotel.model';
import { Router,RouterModule  } from '@angular/router';
import { HotelBookingFooterComponent } from "../hotel-booking-footer/hotel-booking-footer.component";
import { HotelBookingNavbarComponent } from "../hotel-booking-navbar/hotel-booking-navbar.component";
import { filtersData, sectionListData } from '../data/filter-data';
import { Filters ,sectionList} from '../data/filter-data.model';
@Component({
  selector: 'app-hotels',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HotelBookingFooterComponent, HotelBookingNavbarComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent implements OnInit{
  //range input filter
  minBudget = 300; //minimum budget
  maxBudget = 7000; //maximum budget
  Filters: any;

  //if min range max than max range min range = max range
  validateRange() {
    if (this.minBudget > this.maxBudget) {
      this.minBudget = this.maxBudget;
    }
  }
  // checkbox input
  checkBoxValues: string[] = [];
  checkBoxValuesList:Filters[]=[];
  isChecked(value: string): boolean {
    return this.checkBoxValues.includes(value);
  }

  onCheckboxChange(value: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!this.checkBoxValues.includes(value)) {
        this.checkBoxValues.push(value);
      }
    } else {
      this.checkBoxValues = this.checkBoxValues.filter(v => v !== value);
    }

    // Run filter logic only if site matches
    if (this.checkBoxValues.length > 0) {
      this.searchResult = this.hotelList.filter(hotel => {
        const isSiteMatch = hotel.site.toLowerCase() === this.receivedMessage;

        // Extract property type filters
        // const selectedPropertyTypes = this.checkBoxValues.filter(value =>
          // this.checkBoxValuesList.filter(prop => prop.propertyType.includes(value))
          // ['Villa', 'Beach Resort', 'City Hotel'].includes(value)
          // hotel.propertyType.includes(value)

        // );
        const allPropertyTypes = [...new Set(this.hotelList.map(hotel => hotel.propertyType))];
        const selectedPropertyTypes = this.checkBoxValues.filter(val =>
          allPropertyTypes.includes(val)
        );
        const otherFilters = this.checkBoxValues.filter(val =>
          !selectedPropertyTypes.includes(val)
        );

        const hasMatchingPropertyType =
          selectedPropertyTypes.length === 0 ||
          selectedPropertyTypes.includes(hotel.propertyType);

        const matchesOtherFilters = otherFilters.every(value =>
          hotel.hotelAmenities.includes(value) ||
          hotel.roomFacilities.includes(value) ||
          hotel.choices.includes(value) ||
          (value === 'Pets allowed' && hotel.petsAllowed)
        );

        return isSiteMatch && hasMatchingPropertyType && matchesOtherFilters;
      });
    } else {
      // If no checkboxes selected, just return all hotels matching the site
      this.searchResult = this.hotelList.filter(hotel =>
        hotel.site.toLowerCase() === this.receivedMessage
      );
    }
  }


  //filterdata model filter value get in string
  sanitizeFilterValues(sectionKey: string, filter: any): string[] {
    const values = filter[sectionKey];
    if (Array.isArray(values)) {
      return values.map(v => v.toString());
    }
    return [];
  }


  //hotel listing content
  hotelList: Hotel[] = datas;
  filterList: Filters[]=filtersData;
  sectionFilter:sectionList[]=sectionListData;
  //filterListData:Filters[]=[];
  searchResult: Hotel[] = [];
  searchResult1:Hotel[] = [];
  // initial
  hotelListCount: number = 0;
  receivedMessage: string = '';
  isBrowser: boolean;

  // star
  getStars(count: number): any[] {
    const validRating = Math.floor(Number(count));
    return Array(validRating);
  }

  constructor(private dataService: DataService, @Inject(PLATFORM_ID) private platformId: Object,private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId); // localstorage
  }

  ngOnInit() {
    const storedInputs = JSON.parse(localStorage.getItem('searchedinputs') || '{}');
    // console.log("searchedinputs",storedInputs);
    this.hotelListCount = this.hotelList.length;
    // STEP 2: Subscribe to message from service
    this.dataService.currentMessage.subscribe(message => {
      if (message) {
        this.receivedMessage = message; // place data from hotelbooking search
        localStorage.setItem('receivedMessage', message); // datastored in localStorage
        this.searchResult = this.hotelList.filter(hotel => hotel.site === this.receivedMessage);
        //console.log('Search Result from service:', this.searchResult);
      }
    });
    // STEP 1: Try getting from localStorage
    if(this.isBrowser){
      const savedMessage = localStorage.getItem('receivedMessage');
      //console.log('LocalStorage value:', savedMessage); // DEBUG
      if (savedMessage) {
        this.receivedMessage = savedMessage;
        this.searchResult = this.hotelList.filter(hotel => hotel.site.toLowerCase() === this.receivedMessage && hotel.roomTypes.some(room => room.availability>0) );
        //console.log('Search Result from LocalStorage:', this.searchResult);
        // this.searchResult  = this.hotelList.filter(filt => filt.roomTypes.some(type =>this.checkBoxValues.some(value => type.choices.includes(value))));
        //console.log(this.searchResult);



      }
    }


  }

  //hotelDetails() page
  hotelDetails(){
    this.router.navigate(['/hoteldetails']);
  }
}
