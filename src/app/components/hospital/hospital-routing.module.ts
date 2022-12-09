import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { TabsComponent } from './tabs/tabs.component';
import { HistoriesComponent } from './histories/histories.component';

const routes: Routes = [
    {path: '', component: PatientsComponent},
    {path: 'patients', component: PatientsComponent},
    {path: 'histories', component: HistoriesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HospitalRoutingModule { }