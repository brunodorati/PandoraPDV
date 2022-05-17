import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  AddToCart(product: Product) {
    this.cartService.Add(product);
    window.alert(
      'Your product: "' + product.name + '" has been added to the cart!'
    );
  }
}
