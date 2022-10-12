import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';
import { LoginComponent } from './shared/shell/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', loadChildren: () => import('./feature/product/product.module').then((m) => m.ProductModule )},
  {path:'admin', canActivate: [AuthGuard], loadChildren: () => import('./feature/admin/admin-module').then((m) => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
