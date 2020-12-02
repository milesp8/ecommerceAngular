import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { AppServiceService } from './app-service.service'
import { ProductsGuard, CategoriesGuard } from './guards/resolve.guard'

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    AccountComponent,
    ProductsComponent,
    MenuComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppServiceService, 
    ProductsGuard,
    CategoriesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
