import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<any> = new Observable<any>();
  grandTotalPrice$: Observable<number> = new Observable<number>();
  constructor(private cart: CartService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cart.cartList$;
    this.grandTotalPrice$ = this.cart.grandTotalPrice$;
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  
  }

  removeItem(product: any) {
    this.cart.deleteCartProduct(product);
  }

  removeAllProducts() {
    this.cart.deleteAllProducts();
  }
}
