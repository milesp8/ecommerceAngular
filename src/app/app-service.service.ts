import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import {catchError} from 'rxjs/operators'
import { Router } from '@angular/router'
import {ICategory} from './classes/category'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  ////-------------------------------Product route functions--------------------------------------

  // all products (no api route params)
  getAllProducts(): Observable<any> {
    return this.http.get('/api/allProducts')
  }

  // adding product into database (no params)
  addProduct(product: any): Observable<any> {
    return this.http.post<any>('/api/addProduct', product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  // to update product info
  updateProduct(product: any, _id: Object): Observable<any> {
    console.log("Product update called: ")
    return this.http.post('/api/updateProduct/'+_id, product, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      })
    }).pipe(catchError(this.handleError.bind(this)))
  }

  // get specific product information from database (requires product id params)
  specificProduct(_id: Object): Observable<any> {
    return this.http.get('/api/product/'+_id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(_id: Object): Observable<any> {
    console.log("Product delete called: ")
    
    return this.http.delete('/api/deleteProduct/'+_id)
    .pipe(catchError(this.handleError.bind(this)))
  }

  ////-------------------------------Variant route functions--------------------------------------

  getVariants(parentProdId: Object = ""): Observable<any> {
    console.log("Get variants called: ")
    return this.http.get('/api/getVariants/'+parentProdId, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      })
    }).pipe(catchError(this.handleError.bind(this))) 
  }


  // to add new variants
  addVariants(variants: any, parentProdId: Object): Observable<any> {
    console.log("Variants add called: ")
    return this.http.post('/api/addVariants/'+parentProdId, variants, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      })
    }).pipe(catchError(this.handleError.bind(this))) 
  }


  // to update any existing variants info (pass an )
  updateVariants(variants: any): Observable<any> {
    console.log("Variants update called: ")
    return this.http.post('/api/updateVariants', variants, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      })
    }).pipe(catchError(this.handleError.bind(this))) 
  }

  
  // to delete 1 or multiple variants (pass an object of array of variants as this function parameter. No api params)
  deleteVariants(variants: any): Observable<any> {
    console.log("Variants delete called: ")
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      }),
      body: variants,
    };
    
    return this.http.delete('/api/deleteVariants', options)
    .pipe(catchError(this.handleError.bind(this)))
  }

  ////-------------------------------Categories route functions--------------------------------------
  
  // all categories (no api route params)
  getAllCategories(): Observable<any>{
    return this.http.get('/api/getAllCategories')
    .pipe(
      catchError(this.handleError)
    );
  }

  // get an individual category based on its id (pass categoryId as params)
  getCategory(_id: Object): Observable<any> {
    console.log("Get a specific category called: ")

    return this.http.get('/api/category/'+_id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    })
    .pipe(catchError(this.handleError.bind(this)))
  }

  // creates a single category (no api route params. Pass in category json object)
  addCategory(category: any): Observable<any> {
    console.log("Add a category called: ")
    return this.http.post('/api/createCategory', category, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError.bind(this))) 
  }

  // updates category based on its categoryId (pass in categoryId as params and category json object)
  updateCategory(category: any, _id: Object): Observable<any> {
    return this.http.post('/api/updateCategory/'+_id, category, 
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+localStorage.getItem('token')
        })
      }).pipe(catchError(this.handleError.bind(this))) 
  }

  // deletes a single category (pass in categoryId as api route params)
  deleteCategory(_id: Object): Observable<any> {
    console.log("Order delete called: ")
  
    return this.http.delete('/api/deleteCategory/'+_id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+localStorage.getItem('token')
      }),
    })
    .pipe(catchError(this.handleError.bind(this)))
  }

  ////-------------------------------Orders route functions--------------------------------------

    // all orders (needs auth)
    getAllOrders(): Observable<any> {
      return this.http.get('/api/allOrders', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        })
      })
      .pipe(catchError(this.handleError.bind(this)))
    }

    // get a specific order based on it id (pass orderId as api params)
    getOrder(_id: Object): Observable<any> {
      return this.http.get('/api/order/'+_id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        })
      })
      .pipe(catchError(this.handleError.bind(this)))
    }

    // create an order using checkoutpage info (no params. Pass in order json object)
    addOrder(order: any): Observable<any> {
      console.log("check");
      console.log(order);
      return this.http.post('/api/addOrder', order, 
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError.bind(this))) 
    }

    // delete a specific order based on orderId (pass in orderId for api route params)
    deleteOrder(_id: Object): Observable<any> {
      console.log("Order delete called: ")
    
      return this.http.delete('/api/deleteOrder/'+_id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+localStorage.getItem('token')
        }),
      })
      .pipe(catchError(this.handleError.bind(this)))
    }


  ////-------------------------------Error handling functions--------------------------------------

  private handleError(error) {
    if (error.message.includes("401 Unauthorized") && localStorage.getItem('token') != undefined) {
      //console.log("unauthorized logging out")
      this.loginredirect()
    }
    return throwError(error.message || "Internal Error")
  }
  

  private loginredirect() {
    if (localStorage.getItem('token') != undefined) {
      console.log("removing token")
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    } else {
      //console.log('not removing token')
    }
  }
}
