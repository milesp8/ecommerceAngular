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
    this.total = parseInt(this.cookie.get('total'), 0);
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
    if (this.cookie.get('cart') !== ''){this.items = JSON.parse(this.cookie.get('cart')); }
    this.total = parseInt(this.cookie.get('total'), 0);
  }

  addToCart(product: {name: string, price: number, img: string, link: string, description: string}): void {
    this.items.push(product);
    this.total += product.price;
    this.total = Math.round(this.total * 100) / 100;
    this.cookie.set('cart', JSON.stringify(this.getItems()));
    this.cookie.set('total', this.getTotal().toString());
  }

  getItems(): {name: string, price: number, img: string, link: string, description: string}[] {
    return this.items;
  }

  removeItem(index: number): {name: string, price: number, img: string, link: string, description: string} {
    const removedItem = this.items[index];
    this.items.splice(index, 1);
    this.total -= removedItem.price;
    this.total = Math.round(this.total * 100) / 100;
    this.cookie.set('cart', JSON.stringify(this.getItems()));
    this.cookie.set('total', this.getTotal().toString());
    return removedItem;
  }

  clearCart(): {name: string, price: number, img: string, link: string, description: string}[] {
    this.items = [];
    this.total = 0;
    this.cookie.set('cart', JSON.stringify(this.getItems()));
    this.cookie.set('total', this.getTotal().toString());
    return this.items;
  }

  getTotal(): number{
    return this.total;
  }


}
