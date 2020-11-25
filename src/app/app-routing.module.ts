import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from 'src/app/catalog/catalog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
