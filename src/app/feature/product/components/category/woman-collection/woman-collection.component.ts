import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.css']
})
export class WomanCollectionComponent implements OnInit {

  womanCollection: any;
  search: string;
  filterProducts: any;
  openModal: boolean = false;
  selectProduct: any;
  totalLength: any;
  page: number = 1;
  allProducts: any;
  constructor(private api: ApiService, private cart: CartService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
getAllProducts(){
  this.api.getProducts().subscribe(res =>{
    this.womanCollection = res.filter((element) => element.categoryID == 3);
    this.filterProducts = res.filter(element => element.categoryID == 3);
    this.totalLength = res.lenght;
    this.allProducts = res.filter(element => element.categoryID == 3);
    console.log('daj data', this.womanCollection);
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
  this.womanCollection = this.filterProducts.filter((element) =>
    element.title.toLowerCase().includes(newValue.toLowerCase())
  );
}

checkValue(event: any, minValue: number, maxValue: number){
  if(event.checked === true) {
    this.womanCollection = this.filterProducts.filter(element => element.price > minValue && element.price < maxValue);
        return
  }
    this.womanCollection = this.allProducts;
   
  }



}