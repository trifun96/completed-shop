import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { Products } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  @Input() data: Order;
  @Input() productInfo: Products;
  @Output() closeEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  closeButton(){
    this.closeEvent.emit()
  }
}
