import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { Appointment } from '../_models';
import { AppointmentsService } from '../_services/appointment.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name', 'email', 'options'];
  appointments: Appointment[] = [];
  successMsg: string = null;
  errorMsg: string = null;
  constructor(
    public dialog: MatDialog,
    private appointmentService: AppointmentsService,
    ) { }

  ngOnInit(): void {
    this.appointmentService.getAll().subscribe((data) => {
      return this.appointments = data;
    });
  }

  onCancel(id: string): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(async (accept) => {
      if (accept) {
        this.appointmentService
        .deleteAppointments(id)
        .pipe(first())
        .subscribe(() => {
          return this.appointments = this.appointments.filter(({_id}) => id !== _id);
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}