import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { TabsComponent } from './tabs/tabs.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HistoriesComponent } from './histories/histories.component';



@NgModule({
  declarations: [
    PatientsComponent,
    TabsComponent,
    HistoriesComponent
  ],
  exports:[
    TabsComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    MaterialModule
  ]
})
export class HospitalModule { }
