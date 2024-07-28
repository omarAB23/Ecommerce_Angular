import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {
  id: any
  
  data:any ={}
  constructor(private route: ActivatedRoute, private service:ProductsService) {
     this.id=this.route.snapshot.paramMap.get('id');
  }
  getProducts() {
    this.service.getProductById(this.id).subscribe({
        next: (res: any) => {
        this.data = res 
        console.log(this.data);
        
      }
    }
    
    )
  }
  
  ngOnInit() {
    this.getProducts()
  }
}
