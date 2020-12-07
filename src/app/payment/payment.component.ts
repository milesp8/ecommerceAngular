import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartManagerService } from '../cart-manager.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, public cartManager: CartManagerService, public appService: AppServiceService) { }


  ngOnInit(): void {
  }

  processCreditCard(): boolean {return true;}

  addThisOrder(): void {
    if (this.processCreditCard()) {
    let name =
      (document.getElementById("firstname") as HTMLInputElement).value
      + " "
      + (document.getElementById("lastname") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let address =
      (document.getElementById("address1") as HTMLInputElement).value
      + "\n"
      + (document.getElementById("address2") as HTMLInputElement).value
      + "\n"
      + (document.getElementById("address3") as HTMLInputElement).value
      + "\n"
      + (document.getElementById("address4") as HTMLInputElement).value;
    let total = this.cartManager.getTotal();
    let items = this.cartManager.getItems();
    let deliverydate = 0;
    let order = {name: name, email: email, address: address, total: total, items: items, deliverydate: deliverydate}
    this.appService.getAllProducts().forEach(a => console.log(a));
    this.appService.addOrder(order);
  }}
}
