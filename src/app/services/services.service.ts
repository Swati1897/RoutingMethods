import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private readonly baseURL:string = 'https://fakestoreapi.com'; //2nd method
  //   private readonly getProductsURL : string ='products';  //2nd method 

  constructor( private http: HttpClient  ) { }
  // private http: HttpClient 
  // fetchProducts() {
     
  //   return this.http.get(`${this.baseURL} /singh / ${ this.getProductsURL}`);// 2nd method ;2nd way to get the product.
  // }
}
