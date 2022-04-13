import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/new',
    component: ProductNewComponent,
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
