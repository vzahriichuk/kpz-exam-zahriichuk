import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IHistory } from 'src/app/interfaces/history.interface';
import { HospitalServiceService } from 'src/services/hospital-service.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  histories: IHistory[] = [];
  constructor(private _snackBar: MatSnackBar, private hospitalService: HospitalServiceService) { }

  ngOnInit(): void {
    this.hospitalService.getHistories()
    .subscribe(data => this.histories = data);
  }

  createHistory(description: any, date: any, patientId: any, doctorId: any){
    let dto = {
      description: description,
      date: date,
      patientId: patientId,
      doctorId: doctorId
    };
    this.hospitalService.createHistory(dto)
    .subscribe(data => this.histories = data);
  }
}
