import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'Form', component: ReactiveFormComponent },
  { path: 'AddP', component: AddproductComponent },
  { path: 'produit/:id', component: DetailProductComponent },
  { path: 'appart/:id', component: ApartementComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
