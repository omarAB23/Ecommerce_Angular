import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: number = 0;
  Success = false;

  constructor(private service: CartsService) {}

  ngOnInit(): void {
    this.getCardProducts();
    this.getCardTotal();
  }

  getCardProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  getCardTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  plusAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCardTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  minAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCardTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCardTotal();
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCardTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCardTotal();
  }

  addCart() {
    let products = this.cartProducts.map(item => ({
      productId: item.item.id,
      quantity: item.quantity
    }));
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    };

    this.service.CreateNewCart(model).subscribe({
      next: (res) => {
        this.Success = true;
        console.log('Cart created successfully', res);
      },
      error: (err) => {
        console.error('Error creating cart:', err);
      }
    });
  }
}
