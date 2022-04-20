import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAppointmentsComponent } from './create-appointments/create-appointments.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';


const routes: Routes = [
  {
    path: '/',
    component: CreateAppointmentsComponent,
  },
  {
    path: 'home',
    component: CreateAppointmentsComponent,
  },
  {
    path: 'appointments',
    component: ListAppointmentsComponent,
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
