import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit {
  search: string;
  filterProducts: any;
  newCollection: any;
  openModal: boolean = false;
  selectProduct: Products;
  allProducts: any;
  totalLength: any;
  page: number = 1;
  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
getAllProducts(){
  this.api.getProducts().subscribe(res =>{
    this.newCollection = res.filter((element) => element.categoryID == 1);
    this.filterProducts = res.filter(element => element.categoryID == 1);
    this.totalLength = res.lenght
    this.allProducts = res.filter(element => element.categoryID == 1);
    console.log('daj data', this.newCollection);
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
  this.newCollection = this.filterProducts.filter((element) =>
    element.title.toLowerCase().includes(newValue.toLowerCase())
  );
}


checkValue(event: any, minValue: number, maxValue: number){
  if(event.checked === true) {
    this.newCollection = this.filterProducts.filter(element => element.price > minValue && element.price < maxValue);
        return
  }
    this.newCollection = this.allProducts
   
  }

pickValue(event: any, category: any){
  if(event.checked === true){
    this.newCollection = this.filterProducts.filter(element => element.filterCategory == category);
    return
  }

  this.newCollection = this.allProducts;
}
}