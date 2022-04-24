import { Injectable, ɵisListLikeIterable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewAppointment, Appointment, AppointmentAttributes } from '../_models';
import { environment } from '../../environments/environment';

const host: string = environment.host;

interface ResponseAppointment {
  message: string;
  appointment: Appointment;
}



interface ResponseAppointmentDetail {
  data: Appointment;
}

  

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${host}/appointments`);
  }

  public show(id: string): Observable<ResponseAppointmentDetail> {
    return this.http.get<ResponseAppointmentDetail>(`${host}/appointments/${id}`);
  }

  public addAppointment(data: NewAppointment): Observable<ResponseAppointment> {
    return this.http.post<ResponseAppointment>(`${host}/appointments`, data);
  }

  public editAppointment(id: number, data: AppointmentAttributes): Observable<ResponseAppointment> {
    return this.http.put<ResponseAppointment>(`${host}/appointments/${id}`, data);
  }

  public cancelAppointment(id: string): Observable<ResponseAppointment> {
    return this.http.patch<ResponseAppointment>(`${host}/appointments/cancelled/${id}`,{});
  }

  public deleteAppointments(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${host}/appointments/${id}`);
  }

}



