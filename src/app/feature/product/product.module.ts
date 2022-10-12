import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SharedModule } from 'src/app/shared/shared-module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ManCollectionComponent } from './components/category/man-collection/man-collection.component';
import { NewCollectionComponent } from './components/category/new-collection/new-collection.component';
import { WomanCollectionComponent } from './components/category/woman-collection/woman-collection.component';
import { ChildCollectionComponent } from './components/category/child-collection/child-collection.component';
import { OutletCollectionComponent } from './components/category/outlet-collection/outlet-collection.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';







@NgModule({
  declarations: [
    ProductPageComponent,
    ProductModalComponent,
    CartComponent,
    OrderFormComponent,
    AllProductsComponent,
    ManCollectionComponent,
    NewCollectionComponent,
    WomanCollectionComponent,
    ChildCollectionComponent,
    OutletCollectionComponent,

 

 
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    NgxPaginationModule,
    MatCheckboxModule
    
  ]
})
export class ProductModule { }
