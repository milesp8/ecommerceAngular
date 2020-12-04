import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { 
  
  }

  getAllProducts() {
      return this.http.get('/api/allProducts')
  }

  getAllCategories() {
    return this.http.get('/api/getAllCategories')
  }

  // adding product into database (no params)
  addProduct(product: any): Observable<any> {
    return this.http.post<any>('/api/addProducts', product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  // updating product information in database (requires product id params)
  updateProduct(product: any, _id: Object): Observable<any> {
    return this.http.post<any>('/api/addProducts'+_id, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth_token' 
      })
    })
    .pipe(
      catchError(this.handleError)
    );
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
