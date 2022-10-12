import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ChildCollectionComponent } from './components/category/child-collection/child-collection.component';
import { ManCollectionComponent } from './components/category/man-collection/man-collection.component';
import { NewCollectionComponent } from './components/category/new-collection/new-collection.component';
import { OutletCollectionComponent } from './components/category/outlet-collection/outlet-collection.component';
import { WomanCollectionComponent } from './components/category/woman-collection/woman-collection.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  {path:'product/page', component: ProductPageComponent,
  children:[
    {path:'new/collection', component: NewCollectionComponent},
    {path:'man/collection', component: ManCollectionComponent},
    {path:'woman/collection', component: WomanCollectionComponent},
    {path:'child/collection', component:ChildCollectionComponent},
    {path:'outlet/collection', component: OutletCollectionComponent},
    {path:'all/products', component: AllProductsComponent},
    {path:'', redirectTo:'all/products', pathMatch:'full'}
  ]  
},
  {path:'cart', component: CartComponent},
  {path:'checkout', component:OrderFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
