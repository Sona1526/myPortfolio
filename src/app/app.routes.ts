import { Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

export const routes: Routes = [
 // {path:'' , redirectTo:'home', pathMatch:'full'},
  //{path:'**' , redirectTo:'home', pathMatch:'full'},
  {path:'' , component:HomeComponent},
  {path:'myprojects' , component:MyprojectsComponent},
  {path:'hotelbooking' , component:HotelbookingComponent},
  {path:'hotels' , component:HotelsComponent},
  {path:'hotelDetails/:id' , component:HoteldetailsComponent, data: { renderMode: 'no-pre-render' }},
  {path:'booking' , component:BookingPageComponent},
  {path:'booking-confirmation' , component:BookingConfirmationComponent}
];
