import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  orderArr: {name: string, email: string, address: string, total: number, items: [[Object, String, Object, String, Number]], deliverydate: string} [] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.orderData);
    const ordersObj: any = this.activatedRoute.snapshot.data.orderData;
    //Utilize for loop from 
    for (const orderIndex in ordersObj) {
      const ord: {name: string, email: string, address: string, total: number, items: [[Object, String, Object, String, Number]], deliverydate: string} = {
      name: ordersObj[orderIndex].name,
      email: ordersObj[orderIndex].email,
      address: ordersObj[orderIndex].address,
      total: ordersObj[orderIndex].total,
      items: ordersObj[orderIndex].items,
      deliverydate: ordersObj[orderIndex].deliverydate

      };
      if (ord.name.length > 30) { (ord.name = ord.name.substr(0, 30) + '...'); }
      this.orderArr.push(ord);
    }
  }
}
