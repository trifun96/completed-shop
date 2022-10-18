import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Products } from 'src/app/shared/models/products.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  public productData: any;
  openModal: boolean = false;
  selectProduct: Products = null;
  search: string;
  filterProduct: Products[] = [];
  constructor(private api: ApiService, private cart: CartService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.api.getProducts().subscribe((res) => {
      this.productData = res;
      this.filterProduct = res;
      console.log('daj data', this.productData);

      this.productData.forEach((item: any) => {
        Object.assign(item, { total: item.price });
      })
    });
  }

  addToCart(data: any){
    this.cart.addToCart(data);
  }

  openInfoModal(product: Products) {
    this.openModal = true;
    this.selectProduct = product;
  }

  closeModal(event: boolean) {
    this.openModal = event;
    this.selectProduct = null;
  }

  onSearch(newValue: string) {
    this.search = newValue;
    this.productData = this.filterProduct.filter((element) =>
      element.title.toLowerCase().includes(newValue.toLowerCase())
    );
  }
}
