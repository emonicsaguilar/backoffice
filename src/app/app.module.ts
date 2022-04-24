import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { ListAppointmentsComponent, DialogContentExampleDialog } from './list-appointments/list-appointments.component';
import { CreateAppointmentsComponent } from './create-appointments/create-appointments.component';

import {MaterialExampleModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProductNewComponent,
    ProductEditComponent,
    LoginComponent,
    ListAppointmentsComponent,
    DialogContentExampleDialog,
    CreateAppointmentsComponent
  ],
  imports: [
    BrowserModule, // Check
    AppRoutingModule,
    MatNativeDateModule, // check
    HttpClientModule, // chck
    ReactiveFormsModule, // chwck
    FormsModule, //CHeck
    BrowserAnimationsModule, //CHeck
    MaterialExampleModule, // check
    // ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    // MatDatepickerModule, // FIXME: No funciona
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
