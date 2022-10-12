import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @Input() data: Products;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }


  addToCart(data: any){
    this.cart.addToCart(data);
  }
}
