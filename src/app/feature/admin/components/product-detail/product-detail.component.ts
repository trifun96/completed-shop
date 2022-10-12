import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api-service';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  showModal = false;

  isEdit = false;
  editData: Products;

  displayedColumns: string[] = [
    'image',
    'title',
    'description',
    'quantity',
    'price',
    'action',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private api: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      console.log(this.paginator);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    this.api.deleteProducts(id).subscribe((res) => {
      this.toastr.success('Your product is successfully deleted!');

      this.getAllProducts();
    });
  }

  openModal(isEdit: boolean) {
    this.isEdit = isEdit;
    this.showModal = true;
  }

  openEditModal(isEdit: boolean, product: Products) {
    this.isEdit = isEdit;
    this.showModal = true;
    this.editData = product;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    this.showModal = false;
    this.getAllProducts();
  }
}
