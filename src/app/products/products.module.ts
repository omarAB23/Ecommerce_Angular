import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProdComponent } from './components/prod/prod.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProdComponent
  ],
  imports: [
    CommonModule,FormsModule ,SharedModule,RouterModule
  ]
})
export class ProductsModule { }
