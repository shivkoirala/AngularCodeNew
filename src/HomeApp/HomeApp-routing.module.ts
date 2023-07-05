import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomeApp.HomeComponent';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Patient', loadChildren: 
  () => import('../PatientApp/PatientApp.module').then(m => m.PatientModule)
},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
