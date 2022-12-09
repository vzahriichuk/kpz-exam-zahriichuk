import { DatePipe } from "@angular/common";

export interface IPatient{
    id:number;
    firstName: string;
    lastName:string;
    dateOfBirth: DatePipe;
    doctor:string;
}