import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  shipping: { type: string; price: number } | undefined;

  constructor(private http: HttpClient) {}

  Add(product: Product) {
    this.items.push(product);
  }

  SumOfProducts(): Number {
    if (this.items === undefined || this.items === null) {
      return 0;
    }
    return Number(this.items.reduce((Sum, product) => Sum + product.price, 0));
  }

  Shipping(): { type: string; price: number } | undefined {
    return this.shipping;
  }

  Remove(product: Product) {
    let index = this.items.findIndex((p) => p.id === product.id);
    this.items.splice(index, 1);
    return this.items;
  }

  GetShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  GetAll(): Product[] {
    return this.items;
  }

  Clear() {
    this.items = [];
    this.shipping = undefined;
    return this.items;
  }

  AddShipping(shipping: { type: string; price: number }) {
    this.shipping = shipping;
  }
}
