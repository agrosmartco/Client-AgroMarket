import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/admin/products/products.component';
import { ProductsformComponent } from './components/admin/products/productsform/productsform.component';
import { LoginComponent } from './components/login/login.component';
import { SalesComponent } from './components/sales/sales/sales.component';
import { FruvegComponent } from './components/sales/fruveg/fruveg.component';
import { FruitDerivatesComponent } from './components/sales/fruit-derivates/fruit-derivates.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/sales/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'products/add',
    component: ProductsformComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'products/edit/:id',
    component: ProductsformComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sales',
    component: SalesComponent,
    children: [
      {
        path: 'products',
        component: FruvegComponent
      },
      {
        path: 'derivates',
        component: FruitDerivatesComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
