import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService implements OnInit{
  items: {name: string, price: number, img: string, link: string, description: string} [] = [];
  total = 0;

  constructor(private cookie: CookieService){
    if (this.cookie.get('cart') !== ''){this.items = JSON.parse(this.cookie.get('cart')); }
    if (this.items.length === 0){this.total = 0; }
    this.total = parseInt(this.cookie.get('total'), 0);
    if (isNaN(this.total)){this.total = 0; }
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
    if (this.cookie.get('cart') !== ''){this.items = JSON.parse(this.cookie.get('cart')); }
    this.total = parseInt(this.cookie.get('total'), 0);
    if (this.items.length === 0){this.total = 0; }
    if (isNaN(this.total)){this.total = 0; }
  }

  addToCart(product: {name: string, price: number, img: string, link: string, description: string}): void {
    if (!isNaN(product.price)) {
      this.items.push(product);
      this.total += Math.floor(product.price * 100);
      this.cookie.set('cart', JSON.stringify(this.getItems()));
      this.cookie.set('total', this.total.toString());
    }
  }

  getItems(): {name: string, price: number, img: string, link: string, description: string}[] {
    return this.items;
  }

  removeItem(index: number): {name: string, price: number, img: string, link: string, description: string} {
    const removedItem = this.items[index];
    this.items.splice(index, 1);
    if (!isNaN(removedItem.price)) {this.total -= removedItem.price * 100; }
    if (this.items.length === 0){this.total = 0; }
    this.cookie.set('cart', JSON.stringify(this.getItems()));
    this.cookie.set('total', this.total.toString());
    return removedItem;
  }

  clearCart(): {name: string, price: number, img: string, link: string, description: string}[] {
    this.items = [];
    this.total = 0;
    this.cookie.set('cart', JSON.stringify(this.getItems()));
    this.cookie.set('total', this.total.toString());
    return this.items;
  }

  getTotal(): number{
    return this.total / 100;
  }


}
