import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPatient } from 'src/app/interfaces/patient.interface';
import { HospitalServiceService } from 'src/services/hospital-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: IPatient[] = [];
  constructor(private _snackBar: MatSnackBar, private hospitalService: HospitalServiceService) { }

  ngOnInit(): void {
    this.hospitalService.getPatients()
    .subscribe(data => this.patients = data);
  }

  createPatient(firstName: any, lastName: any, dateOfBirth: any, doctorId: any){
    let dto = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      doctorId: doctorId
    };
    this.hospitalService.createPatient(dto)
    .subscribe(data => this.patients = data);
  }
}
