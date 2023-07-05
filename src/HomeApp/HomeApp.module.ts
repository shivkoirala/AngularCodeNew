import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './HomeApp-routing.module';
import { HomeComponent } from './HomeApp.HomeComponent';
import { MasterPageComponent } from './HomeApp.MasterPageComponent';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
