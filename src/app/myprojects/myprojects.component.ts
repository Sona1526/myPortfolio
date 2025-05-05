import { Component } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  imports: [],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {

/*******************ROUGH CODES HERE******************* */
    // CHECKBOX FILTER  CHANGE 1
        // if (this.checkBoxValues && this.checkBoxValues.length > 0) {
        //   this.searchResult = this.hotelList.filter(hotel =>{

        //     const isSiteMatch = hotel.site.toLowerCase() === this.receivedMessage ;
        //     const matchesAllFilters = (this.checkBoxValues.every(value =>
        //       hotel.hotelAmenities.includes(value) ||
        //       hotel.roomFacilities.includes(value) ||
        //       hotel.choices.includes(value) ||
        //       (value === 'Pets allowed' && hotel.petsAllowed)
        //     )) ;

        //     const matchesAnyPropertyType = this.checkBoxValues.some(value =>
        //       hotel.propertyType.includes(value) // this is the OR logic you're asking for
        //     );


        //     if (matchesAnyPropertyType && matchesAllFilters) {
        //       console.log("property");
        //       return isSiteMatch && (matchesAllFilters || matchesAnyPropertyType);

        //     } else {
        //       console.log("notproperty");
        //       return isSiteMatch && (matchesAllFilters|| matchesAnyPropertyType) ;
        //     }
        //   });
        // }

    // CHECKBOX FILTER CHANGE 2
        // onCheckboxChange(value: string, event: Event): void {
        //   const isChecked = (event.target as HTMLInputElement).checked;

        //   if (isChecked && this.checkBoxValues) {
        //     if (!this.checkBoxValues.includes(value)) {
        //       const val= this.checkBoxValues.push(value);
        //       //console.log(this.checkBoxValues);
        //       if (this.checkBoxValues && this.checkBoxValues.length > 0) {
        //         this.searchResult = this.hotelList.filter(hotel => {
        //           const isSiteMatch = hotel.site.toLowerCase() === this.receivedMessage;

        //           // Get selected property types from checkboxes
        //           const selectedPropertyTypes = this.checkBoxValues.filter(val =>
        //             ['Hotel', 'Resort', 'Villa', 'Beach Resort', 'City Hotel'].includes(val) // example types
        //           );

        //           // Get non-propertyType filters (e.g. amenities, facilities, choices, pets)
        //           const otherFilters = this.checkBoxValues.filter(val =>
        //             !selectedPropertyTypes.includes(val)
        //           );

        //           const hasMatchingPropertyType =
        //             selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(hotel.propertyType);

        //           const matchesOtherFilters = otherFilters.every(value =>
        //             hotel.hotelAmenities.includes(value) ||
        //             hotel.roomFacilities.includes(value) ||
        //             hotel.choices.includes(value) ||
        //             (value === 'Pets allowed' && hotel.petsAllowed)
        //           );

        //           return isSiteMatch && hasMatchingPropertyType && matchesOtherFilters;
        //         });

        //       }
        //     }
        //   }
        //   else {
        //     this.searchResult = this.hotelList.filter(hotel =>
        //     hotel.site.toLowerCase() === this.receivedMessage);
        //     this.checkBoxValues = this.checkBoxValues.filter(v => v !== value);
        //   }
        // }

    // CHECKBOX FILTER CHANGE 3
        // onCheckboxChange(value: string, event: Event): void {
        //   const isChecked = (event.target as HTMLInputElement).checked;

        //   if (isChecked) {
        //     if (!this.checkBoxValues.includes(value)) {
        //       this.checkBoxValues.push(value);
        //     }
        //   } else {
        //     this.checkBoxValues = this.checkBoxValues.filter(v => v !== value);
        //   }

        //   // Run filter logic only if site matches
        //   if (this.checkBoxValues.length > 0) {
        //     this.searchResult = this.hotelList.filter(hotel => {
        //       const isSiteMatch = hotel.site.toLowerCase() === this.receivedMessage;

        //       // property type filters
        //       const selectedPropertyTypes = this.checkBoxValues.filter(val =>
        //        hotel.propertyType.includes(val)
        //       );

        //       const otherFilters = this.checkBoxValues.filter(val =>
        //         !selectedPropertyTypes.includes(val)
        //       );

        //       const hasMatchingPropertyType =
        //         selectedPropertyTypes.length === 0 ||
        //         selectedPropertyTypes.includes(hotel.propertyType);

        //       const matchesOtherFilters = otherFilters.every(value =>
        //         hotel.hotelAmenities.includes(value) ||
        //         hotel.roomFacilities.includes(value) ||
        //         hotel.choices.includes(value) ||
        //         (value === 'Pets allowed' && hotel.petsAllowed)
        //       );

        //       return isSiteMatch && hasMatchingPropertyType && matchesOtherFilters;
        //     });
        //   } else {
        //     // If no checkboxes selected, just return all hotels matching the site
        //     this.searchResult = this.hotelList.filter(hotel =>
        //       hotel.site.toLowerCase() === this.receivedMessage
        //     );
        //   }
        // }
/*******************ROUGH CODES HERE******************* */
}
