import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  items: {name: string, price: number, img: string, link: string, description: string} [] = [];
  total = 0;

  addToCart(product: {name: string, price: number, img: string, link: string, description: string}): void {
    this.items.push(product);
    this.total += product.price;
    this.total = Math.round(this.total * 100) / 100;
  }

  getItems(): {name: string, price: number, img: string, link: string, description: string}[] {
    return this.items;
  }

  removeItem(index: number): {name: string, price: number, img: string, link: string, description: string} {
    const removedItem = this.items[index];
    this.items.splice(index, 1);
    this.total -= removedItem.price;
    return removedItem;
  }

  clearCart(): {name: string, price: number, img: string, link: string, description: string}[] {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  getTotal(): number{
    return this.total;
  }


  constructor() { }
}
