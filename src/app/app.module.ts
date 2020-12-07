import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { AppServiceService } from './app-service.service'
import { ProductsGuard, CategoriesGuard } from './guards/resolve.guard';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component'
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    CartComponent,
    AccountComponent,
    ProductsComponent,
    MenuComponent,
    PaymentComponent,
    EditProductsComponent,
    EditOrdersComponent,
    EditCategoriesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppServiceService, 
    ProductsGuard,
    CategoriesGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
