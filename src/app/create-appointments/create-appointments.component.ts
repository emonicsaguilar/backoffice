import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AppointmentsService } from '../_services/appointment.service';

@Component({
  selector: 'app-create-appointments',
  templateUrl: './create-appointments.component.html',
  styleUrls: ['./create-appointments.component.css']
})
export class CreateAppointmentsComponent implements OnInit {
  formGroup: FormGroup;
  selected: string;
  successMsg: string = null;
  errorMsg: string = null;
  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentsService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.maxLength(60)]],
      date: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  onSubmit(): void {
    const { name, email, date }: {name: string, email: string, date: Date } = this.formGroup.value;
    this.appointmentService.addAppointment({ name, email, date: date.toISOString().slice(0, 10) })
    .pipe(first())
    .subscribe((response) => {
      console.log("🚀 ~ file: create-appointments.component.ts ~ line 34 ~ CreateAppointmentsComponent ~ .subscribe ~ response", response)
      
      this.successMsg = response.message;
    });

  }
}
