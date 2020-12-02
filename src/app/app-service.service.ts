import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

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
}
