import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AdminRoutingModule } from './admin-routing';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { AddModalComponent } from './components/add-modal/add-modal.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductDetailComponent,
    AddModalComponent,
    OrderDetailComponent,
    OrderInfoComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule
  ],
})
export class AdminModule {}
