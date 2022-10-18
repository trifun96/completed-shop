import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-outlet-collection',
  templateUrl: './outlet-collection.component.html',
  styleUrls: ['./outlet-collection.component.css']
})
export class OutletCollectionComponent implements OnInit {
  search: string;
  filterProducts: any;
  outletCollection: any;
  openModal: boolean = false;
  selectProduct: any;
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
    this.outletCollection = res.filter((element) => element.categoryID == 5);
    this.filterProducts = res.filter(element => element.categoryID == 5);
    console.log('daj data', this.outletCollection);
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
  this.outletCollection = this.filterProducts.filter((element) =>
    element.title.toLowerCase().includes(newValue.toLowerCase())
  );
}

}