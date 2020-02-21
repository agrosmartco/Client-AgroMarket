import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProducts():Observable<any> {

    return this.http.get(`${this.API_URI}/products`);
  }

  getOneProduct(id: string):Observable<any> {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }

  saveProduct(product:Products):Observable<any> {
    
    return this.http.post(`${this.API_URI}/products`, product)
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.API_URI}/products/${id}`)
  }

  updateProduct(id: string | number, product:any) {
    console.log(product);
    return this.http.put(`${this.API_URI}/products/${id}`, product)

  }

  getFruveg() {
    return this.http.get(`${this.API_URI}/sales/fruveg`);
  }

  getDerivates() {
    return this.http.get(`${this.API_URI}/sales/derivates`);
  }
}
