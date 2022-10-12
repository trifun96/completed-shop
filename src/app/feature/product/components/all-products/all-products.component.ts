import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Products } from 'src/app/shared/models/products.model';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit { 
  public productData: any;
  openModal: boolean = false;
  selectProduct: Products = null;
  search: string;
  filterProduct: Products[] = [];
  totalLength: any;
  page: number = 1;
  allProducts: any;
  constructor(private api: ApiService, private cart: CartService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.api.getProducts().subscribe((res) => {
      this.productData = res;;
      this.filterProduct = res;
      this.allProducts = res;
      this.totalLength = res.length;
      console.log('daj lenght', this.totalLength)


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


  checkValue(event: any, minValue: number, maxValue: number){
    if(event.checked === true) {
      this.productData = this.filterProduct.filter(element => element.price > minValue && element.price < maxValue);
          return
    }
      this.productData = this.allProducts
     
    }

  pickValue(event: any, category: any){
    if(event.checked === true){
      this.productData = this.filterProduct.filter(element => element.categoryID === category);
      return
    }

    this.productData = this.allProducts;
  }
}
