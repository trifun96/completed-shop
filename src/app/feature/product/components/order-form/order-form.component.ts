import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api-service';
import { CartService } from 'src/app/core/services/cart-service';
import { Order } from 'src/app/shared/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderModelObj: Order = new Order();
  order: any;


  constructor(private cart: CartService, private api: ApiService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  this.cart.getProducts().subscribe(res =>{
    this.order = res;
    console.log('cartItem', this.order)
  })
  }

  orderForm = new FormGroup({
    name: new FormControl(this.orderModelObj.name),
    lastName: new FormControl(this.orderModelObj.lastName),
    mobilePhone: new FormControl(this.orderModelObj.mobilePhone),
    city: new FormControl(this.orderModelObj.city),
    address: new FormControl(this.orderModelObj.address),
    postalCode: new FormControl(this.orderModelObj.postalCode),
  })

  postOrderData(){
    this.orderModelObj.name = this.orderForm.value.name;
    this.orderModelObj.lastName = this.orderForm.value.lastName;
    this.orderModelObj.mobilePhone = this.orderForm.value.mobilePhone;
    this.orderModelObj.city = this.orderForm.value.city;
    this.orderModelObj.address = this.orderForm.value.address;
    this.orderModelObj.postalCode = this.orderForm.value.postalCode;
    this.orderModelObj.orders = this.order;
    console.log('data', this.orderModelObj);
    

    this.api.postOrders(this.orderModelObj).subscribe(res =>{
    this.toastr.success('You are successfully send your order!');
    this.router.navigate(['product/page']);

    })
    this.orderForm.reset();
  }

}
