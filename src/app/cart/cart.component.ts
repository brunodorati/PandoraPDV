import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

import { Product } from '../models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CheckoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  items() {
    return this.cartService.GetAll();
  }

  RemoveFromCart(product: Product) {
    this.cartService.Remove(product);
  }

  Shipping() {
    return this.cartService.Shipping();
  }

  SumOfProducts(): Number {
    return this.cartService.SumOfProducts();
  }

  Sum() {
    return (
      +this.cartService.SumOfProducts() +
      (this.cartService.Shipping()?.price ?? 0)
    );
  }

  onSubmit(): void {
    this.cartService.Clear();
    window.alert(
      'Sua venda foi enviada para \n'+
      '\t' + this.CheckoutForm.value.name + '\n' + 
      '\t' + this.CheckoutForm.value.address
    );
    this.CheckoutForm.reset();
  }
}
