import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  selectedFile = null
  fileVariantId = null
  fileProdId = null

  prodArr: {name: string, price: number, img: string, link: string, description: string, categories: string[]} [] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute, 
              config: NgbModalConfig, private modalService: NgbModal) { }

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

    
      for(let variant in prod.variantIds) {
        prod.variantIds[variant].img = prod.variantIds[0].images[0]
      }

      console.log("Product images: ", prod.variantIds[0].images[0])
      console.log("image string: ", prod.variantIds[0].img)
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

  imageUpload(btnId, type) {
    let filename = (<HTMLInputElement>document.getElementById(btnId+'.imgBtn')).value;
    let name = filename.split('\\')

    console.log(name[name.length - 1])

    this.selectedFile=name[name.length - 1]

    if(type == "prod") {
      (<HTMLImageElement>document.getElementById(btnId+'.img')).src="../assets/products/"+this.selectedFile
      this.fileProdId = btnId
    } else {
      (<HTMLImageElement>document.getElementById(btnId+'.img')).src="../assets/products/"+this.selectedFile
      this.fileVariantId = btnId
    }
  }
  // to reload the page when some change has been made
  runInit() {
    window.location.reload();  
  }


  variantUpdate(variantId: any){
    console.log(variantId)

    let variant_name = (<HTMLInputElement>document.getElementById(variantId+'.name')).value;
    let variant_price = (<HTMLInputElement>document.getElementById(variantId+'.price')).value;
    let variant_quantity = (<HTMLInputElement>document.getElementById(variantId+'.quantity')).value;


    console.log('Variant name: ', variant_name)
    console.log('Variant price: ', variant_price)
    console.log('Variant quantity: ', variant_quantity)

    document.getElementById(variantId+'.name').style.border="none"
    document.getElementById(variantId+'.price').style.border="none"
    document.getElementById(variantId+'.quantity').style.border="none"


    if (variant_name == '' || variant_price == '' || variant_quantity == '') {

      if(variant_name == '') {
        document.getElementById(variantId+'.name').style.border="1.5px solid #ff0000"
      }
      if(variant_price == '') {
        document.getElementById(variantId+'.price').style.border="1.5px solid #ff0000"
      }
      if(variant_quantity == '') {
        document.getElementById(variantId+'.quantity').style.border="1.5px solid #ff0000"
      }
    } else {

      console.log(variantId)

      let fileName = null
      if (this.fileVariantId == variantId) {
        console.log("Same variant ID. So replace possible")
        fileName = this.selectedFile
      } else {
        console.log("Not same variant ID. So replace not possible")
        fileName = (<HTMLImageElement>document.getElementById(variantId+'.img')).src
      }

      console.log("FILENAME: ", fileName)

      let variantObj = {
        "_id": variantId,
        "name": variant_name,
        "price": variant_price,
        "quantity": variant_quantity,
        "images": [fileName]
      }
      this.appservice.updateVariants(variantObj).subscribe((data) =>{
        console.log(data)
        this.runInit()
      }, (error) => {
        console.log(error)
      })
    }
    
  }

  variantRemove(variantId: any) {

  }

  variantAdd(prodId: any) {
    let variant_name = (<HTMLInputElement>document.getElementById(prodId+'.newName')).value;
    let variant_price = (<HTMLInputElement>document.getElementById(prodId+'.newPrice')).value;
    let variant_quantity = (<HTMLInputElement>document.getElementById(prodId+'.newQuantity')).value;


    console.log('Variant name: ', variant_name)
    console.log('Variant price: ', variant_price)
    console.log('Variant quantity: ', variant_quantity)

    document.getElementById(prodId+'.newName').style.border="none"
    document.getElementById(prodId+'.newPrice').style.border="none"
    document.getElementById(prodId+'.newQuantity').style.border="none"

    if (variant_name == '' || variant_price == '' || variant_quantity == '') {

      if(variant_name == '') {

        document.getElementById(prodId+'.newName').style.border="1.5px solid #ff0000"
      }
      if(variant_price == '') {
        document.getElementById(prodId+'.newPrice').style.border="1.5px solid #ff0000"
      }
      if(variant_quantity == '') {
        document.getElementById(prodId+'.newQuantity').style.border="1.5px solid #ff0000"
      }
    } else {

      let variantObj = {
        "name": variant_name,
        "price": variant_price,
        "quantity": variant_quantity
      }
      

      this.appservice.addVariants(prodId, variantObj).subscribe((data) =>{
        console.log(data)
        this.runInit()
      }, (error) => {
        console.log(error)
      })
    }

  }
  
  @Input() item: any;
  variantRemoveModal(alertModal) {
    //const alertModalRef = this.modalService.open(alertModal)
    this.modalService.open(alertModal)
    this.item = {
      "name": "prodname",
      "price": 99,
      "quantity": 20
    }
    //alertModalRef.componentInstance.item = this.item
  }

}
