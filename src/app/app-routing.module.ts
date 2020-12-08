import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import {ProductsComponent } from './products/products.component';
import { ProductsGuard, CategoriesGuard } from './guards/resolve.guard';
import { PaymentComponent } from './payment/payment.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {PaysuccessComponent} from './paysuccess/paysuccess.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'catalog',
    component: CatalogComponent,
    resolve: {
      prodData: ProductsGuard,
      catData: CategoriesGuard,
    },

  },
  {path: 'catalog/:category',
  component: CatalogComponent,
  resolve: {
    prodData: ProductsGuard,
    catData: CategoriesGuard,
  },

},
  {path: 'cart', component: CartComponent},

  {path: 'login',
    component: LoginComponent
  },
  {path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  resolve: {
    categoryData: CategoriesGuard,
    prodData: ProductsGuard
  }},
  {path: 'products/:id/:variant', component: ProductsComponent,
  resolve: {
    prodData: ProductsGuard
  }},
  {path: 'payment', component: PaymentComponent},
  {path: 'paysuccess', component: PaysuccessComponent},
  {path: 'editorders',
    component: EditOrdersComponent,
    canActivate: [AuthGuard],
  },
  {path: 'editproducts',
    component: EditProductsComponent,
    canActivate: [AuthGuard],
    resolve: {
      prodData: ProductsGuard
    }
  },
  {path: 'editcategories',
    component: EditCategoriesComponent,
    canActivate: [AuthGuard],
    resolve: {
      catData: CategoriesGuard
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
