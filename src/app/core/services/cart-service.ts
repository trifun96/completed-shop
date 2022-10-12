import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject, map, tap, take } from 'rxjs';
import { Products } from 'src/app/shared/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public cartList$ = new BehaviorSubject<Products[]>([]);
  public totalItem$ = new BehaviorSubject<number>(0);
  public grandTotalPrice$ = new BehaviorSubject<number>(0);

  constructor() {
    this.cartList$.asObservable();
    this.grandTotalPrice$.asObservable();
  }
  getProducts() {
    return this.cartList$.asObservable();
  }

  getTotalPrice() {
    let currentGrandTotalPrice = 0;
    this.grandTotalPrice$.pipe(take(1)).subscribe((res: number) => {
      currentGrandTotalPrice = res;
    });
    return currentGrandTotalPrice;
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.cartList$.next(this.cartItemList);
    this.totalItem$.next(this.cartItemList.length);

    const currentGrandTotalPrice = this.getTotalPrice();
    this.grandTotalPrice$.next(currentGrandTotalPrice + product.price);
  }

  deleteCartProduct(product) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });

    this.cartList$.next(this.cartItemList);
    this.totalItem$.next(this.cartItemList.length);

    const currentGrandTotalPrice = this.getTotalPrice();
    this.grandTotalPrice$.next(currentGrandTotalPrice - product.price);
  }
  deleteAllProducts() {
    this.cartItemList = [];
    this.cartList$.next(this.cartItemList);
    this.totalItem$.next(this.cartItemList.length);
 
  }
}
