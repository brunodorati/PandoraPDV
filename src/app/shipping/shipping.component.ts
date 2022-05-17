import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.cartService.GetShippingPrices();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  UsarEntrega(shipping: { type: string; price: number }) {
    this.cartService.AddShipping(shipping);
  }
}
