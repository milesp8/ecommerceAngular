import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import {ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products/:id', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
