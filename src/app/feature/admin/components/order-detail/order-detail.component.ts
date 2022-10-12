import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api-service';
import { Order } from 'src/app/shared/models/order.model';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderData: any;
  infoModal: boolean = false;
  selectOrder: Order = null;
  selectProduct: Products = null;
  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }
  getAllOrder(){
    this.api.getOrders().subscribe(res =>{
      this.orderData = res;
      console.log('data', this.orderData);
    })
  }

  openModalInfo(order: Order, item: Products) : void{
    this.infoModal = true;
    this.selectOrder = order;
    this.selectProduct = item[0];
    console.log('daj item', item )
  }

  closeInfoModal(){
    this.infoModal = false;
 
  }

  closeButton(){
    this.infoModal = false;
    this.toastr.success('You are successfully delivery product');
  }

  deleteOrder(order: any){
    this.api.deleteOrder(order.id).subscribe(res =>{
      this.toastr.success('You are successfully deleted order!');
      this.getAllOrder();
    })
  }
}
