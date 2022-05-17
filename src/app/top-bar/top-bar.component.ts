import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private cartService: CartService
  ) {}

  ItemsCount(): Number
  {
    return this.cartService.GetAll().length;
  }
}