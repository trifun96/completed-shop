import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-child-collection',
  templateUrl: './child-collection.component.html',
  styleUrls: ['./child-collection.component.css']
})
export class ChildCollectionComponent implements OnInit {
  search: string;
  filterProducts: any;
  childCollection: any;
  openModal: boolean = false;
  selectProduct: any;
  allProducts: any;
  totalLength: any;
  page: number = 1;
  
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
    this.childCollection = res.filter((element) => element.categoryID == 4);
    this.filterProducts = res.filter(element => element.categoryID == 4);
    this.allProducts = res.filter(element => element.categoryID == 4);
    this.totalLength = res.lenght;
    console.log('daj data', this.childCollection);
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
  this.childCollection = this.filterProducts.filter((element) =>
    element.title.toLowerCase().includes(newValue.toLowerCase())
  );
}

checkValue(event: any, minValue: number, maxValue: number){
  if(event.checked === true) {
    this.childCollection = this.filterProducts.filter(element => element.price > minValue && element.price < maxValue);
        return
  }
    this.childCollection = this.allProducts
   
  }

}