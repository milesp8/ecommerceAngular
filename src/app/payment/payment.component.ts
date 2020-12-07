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
    this.toggleToolbar();
  }

  processCreditCard(): boolean { return true; }

  addThisOrder(): void {
    let canContinue = true;
    if ((document.getElementById("firstname") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("n1").innerText = " required*";
    } else {
      document.getElementById("n1").innerText = " *";
    }
    if ((document.getElementById("lastname") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("n2").innerText = " required*";
    } else {
      document.getElementById("n2").innerText = " *";
    }
    if ((document.getElementById("email") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("e").innerText = " required*";
    } else {
      document.getElementById("e").innerText = " *";
    }
    if ((document.getElementById("address1") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("a1").innerText = " required*";
    } else {
      document.getElementById("a1").innerText = " *";
    }
    if ((document.getElementById("address2") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("a2").innerText = " required*";
    } else {
      document.getElementById("a2").innerText = " *";
    }
    if ((document.getElementById("creditnumber") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("c1").innerText = " required*";
    } else {
      document.getElementById("c1").innerText = " *";
    }
    if ((document.getElementById("creditcode") as HTMLInputElement).value == "") {
      canContinue = false;
      document.getElementById("c2").innerText = " required*";
    } else {
      document.getElementById("c2").innerText = " *";
    }
    if (canContinue) {
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
          + (document.getElementById("address3") as HTMLInputElement).value;
        let total = this.cartManager.getTotal();
        let items = this.cartManager.getItems();
        let deliverydate = "0";
        let order = { name: name, email: email, address: address, total: total, items: items, deliverydate: deliverydate }
        
        this.appService.getAllProducts().subscribe((data) => {
          console.log(data)
        }, (error) => {
          console.log("Error: ", error)
        })
        
        this.appService.addOrder(order).subscribe((data) => {
          console.log(data)
        }, (error) => {
          console.log(error)
        }
        );
        console.log(this.appService.getAllOrders());
        this.cartManager.clearCart();
        this.router.navigate(["/paysuccess"]);
      }
    }
  }

  toggleToolbar() {
    var m = document.getElementById('header');
    if (m.style.display === "none") {
      m.style.display = "flex";
    } else {
      m.style.display = "none";
    }
  }
}
