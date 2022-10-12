import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.component.html',
  styleUrls: ['./man-collection.component.css']
})
export class ManCollectionComponent implements OnInit {
  search: string;
  selectProduct: Products;
  openModal: boolean = false;
  filterProducts: any;
  manCollection: any;
  allProducts: any;
  totalLength: any;
  page: number = 1;

  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
getAllProducts(){
  this.api.getProducts().subscribe(res =>{
    this.manCollection = res.filter((element) => element.categoryID == 2);
    this.filterProducts = res.filter(element => element.categoryID == 2);
    this.allProducts = res.filter(element => element.categoryID == 2);
    this.totalLength = res.lenght;
    console.log('daj data', this.manCollection);
  })
}

addToCart(data: any){
  this.cart.addToCart(data);
}

openInfoModal(data: any){
  this.openModal = true;
  this.selectProduct = data;
}

closeModal(){
  this.openModal = false;
}

onSearch(newValue: string) {
  this.search = newValue;
  this.manCollection = this.filterProducts.filter((element) =>
    element.title.toLowerCase().includes(newValue.toLowerCase())
  );
}

checkValue(event: any, minValue: number, maxValue: number){
  if(event.checked === true) {
    this.manCollection = this.filterProducts.filter(element => element.price > minValue && element.price < maxValue);
        return
  }
    this.manCollection = this.allProducts
   
  }

}