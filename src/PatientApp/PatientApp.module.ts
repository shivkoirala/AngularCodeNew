import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  PatientRoutingModule } from './PatientApp-routing.module';
import { PatientComponent } from './PatientApp.PatientComponent';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
