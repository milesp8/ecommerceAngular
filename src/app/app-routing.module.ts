import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import {ProductsComponent } from './products/products.component';
import { ProductsGuard, CategoriesGuard } from './guards/resolve.guard'
import { PaymentComponent } from './payment/payment.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';


const routes: Routes = [
  {path: 'catalog',
    component: CatalogComponent,
    resolve: {
      prodData: ProductsGuard
    }
  },
  {path: 'cart', component: CartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products/:id', component: ProductsComponent,
  resolve: {
    prodData: ProductsGuard
  }},
  {path: 'payment', component: PaymentComponent},
  {path: 'editorders', component: EditOrdersComponent},
  {path: 'editproducts', component: EditProductsComponent},
  {path: 'editcategories', component: EditCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
