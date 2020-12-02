import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerceAngular';

  constructor (private service : AppServiceService) {

  }

  ngOnInit() {
    /*
    this.service.getAllProducts()
    .subscribe(
        products => {
          console.log('Response: ', products)
        }, error => {
          console.log('Error found: ', error)
        }
    )

    this.service.getAllCategories()
    .subscribe(
        categories => {
          console.log('Response: ', categories)
        }, error => {
          console.log('Error found: ', error)
        }
    )*/

  }
  

  /*
  getDataFromApi(){
    this.service.getData().subscribe((response) => {
      console.log('Response from API is ', response)
    }, (error) => {
      console.log('Error is ', error)
    })
  }*/

}
