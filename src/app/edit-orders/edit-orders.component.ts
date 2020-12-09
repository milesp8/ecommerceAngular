import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  orderArr: {_id: any, name: string, email: string, address: string, total: number, items: [[Object, String, Object, String, Number]], deliverydate: string} [] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.orderData);
    const ordersObj: any = this.activatedRoute.snapshot.data.orderData;
    //Utilize for loop from 
    for (const orderIndex in ordersObj) {
      const ord: {_id: any, name: string, email: string, address: string, total: number, items: [[Object, String, Object, String, Number]], deliverydate: string} = {
      _id: ordersObj[orderIndex]._id,
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
  runInit() {
    window.location.reload();  
  }
  remove(ord_id){
    console.log(ord_id);
    this.appservice.deleteOrder(ord_id).subscribe((data) =>{
      console.log(data)
      this.runInit()
    }, (error) => {
      console.log(error)
    })
  }
}
