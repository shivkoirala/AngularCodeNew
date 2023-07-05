import { Component } from '@angular/core';
import { Patient } from './PatientApp.PatientModel';

@Component({
  templateUrl: './PatientApp.PatientComponent.html'
})
export class PatientComponent {
  title = 'HIMS';
  patObj:Patient = new Patient();
  patObjs:Array<Patient> = new Array<Patient>();
  value:string="";
  Add(){
    this.patObjs.push(this.patObj);
    this.patObj =new Patient();
  }
}
