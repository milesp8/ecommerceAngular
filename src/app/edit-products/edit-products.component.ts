import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  selectedFile = null
  prodArr: {name: string, price: number, img: string, link: string, description: string, categories: string[]} [] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data.prodData);
    const productsObj: any = this.activatedRoute.snapshot.data.prodData;
    //Utilize for loop from 
    for (const productIndex in productsObj) {
      const prod: {_id: any, name: string, price: number, img: string, link: string, description: string, categories: string[], variantIds: any[], testArr: any[]} = {
      _id: productsObj[productIndex]._id,
      name: productsObj[productIndex].name,
      price: productsObj[productIndex].variantIds[0].price,
      img: 'assets/img/new.png',
      link: '/products/' + productIndex,
      description: productsObj[productIndex].description.toString(),
      categories: productsObj[productIndex].categories, //Unsure of name used by categories
      variantIds: productsObj[productIndex].variantIds,
      testArr: [{"num":1}, {"num":2}, {"num":3}, {"num":4}, {"num":5}]
      };

      console.log("Product variants: ", typeof prod.variantIds)
      console.log("Test array: ", typeof prod.testArr)

      this.prodArr.push(prod);
    }
  }

  toggleCollapse(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
    } 
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files
    console.log(this.selectedFile)
  }

  // to reload the page when some change has been made
  runInit() {
    window.location.reload();  
  }

}
