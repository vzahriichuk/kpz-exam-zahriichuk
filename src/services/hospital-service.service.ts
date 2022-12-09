import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, switchMap } from 'rxjs';
import { IPatient } from 'src/app/interfaces/patient.interface';
import { INewPatient } from 'src/app/interfaces/newpatient.interface';
import { IHistory } from 'src/app/interfaces/history.interface';
import { INewHistory } from 'src/app/interfaces/newhistory.interface';


@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {
  private url = environment.API + '/api/v1/'
  constructor(private http: HttpClient) { }

  getPatients(): Observable<IPatient[]>{
    return this.http.get<IPatient[]>(this.url+"Patient");
  }
  
  createPatient(body: INewPatient): Observable<IPatient[]>{
    return this.http.post(this.url+"Patient/create", body, {responseType: 'json'})
    .pipe(
      switchMap(() => this.getPatients())
    )
  }

  getHistories(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(this.url+"SicknessHistory");
  }

  createHistory(body: INewHistory): Observable<IHistory[]>{
    return this.http.post(this.url + "SicknessHistory/create", body, {responseType: 'json'})
    .pipe(
      switchMap(() => this.getHistories())
    )
  }
}
