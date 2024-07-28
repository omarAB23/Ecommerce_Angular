import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log(this.products);
        this.loading = false;
      },
      error: (err: any) => {
        alert('Failed to fetch products: ' + (err.message || err));
      },
    });
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
        console.log(this.categories);
        this.loading = false;
      },
      error: (err: any) => {
        alert('Failed to fetch products: ' + (err.message || err));
      },
    });
  }
  filterCategories(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getPCateg(value);
      console.log(value);
    }
  }

  getPCateg(key: string) {
    this.loading = true;
    this.service.getAllCategoriesByCategories(key).subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      },
    });
  }

  receiveSelectedCateg(event: any) {
    let value = event.target.value;
    value == 'All' ? this.getProducts() : this.getPCateg(value);
  }

   addtoCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      console.log(event);
      let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert('product already exists');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
