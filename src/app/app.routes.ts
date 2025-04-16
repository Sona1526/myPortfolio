import { Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { MyprojectsComponent } from './myprojects/myprojects.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

export const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'myprojects' , component:MyprojectsComponent},
  {path:'hotelbooking' , component:HotelbookingComponent}

];
