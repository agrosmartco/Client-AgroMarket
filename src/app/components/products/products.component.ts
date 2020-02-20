import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  products: Products[];

  delete: boolean = true;
  searchTerm: string;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.delete = false;
  }


  getProducts() {
    this.productService.getProducts().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      res => {

        this.getProducts();

      },
      err => console.log(err)

    )

  }


  funcDelete(valid: boolean) {
    if (valid) {
      this.delete = true;
    } else {
      this.delete = false;
    }

  }



}
