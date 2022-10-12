import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'products', component: ProductDetailComponent },
      { path: 'order/detail', component: OrderDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: '', redirectTo: '/admin/products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
