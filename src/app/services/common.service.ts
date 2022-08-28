
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  //  postman use URL
  // private readonly baseURL : string = 'https://fakestoreapi.com/'; //2nd method
  // private readonly getProductsURL : string ='products';  //2nd method

  private readonly baseURL: string = 'http://localhost:4000/api';
  private readonly getProductsURL: string = '/products'; //All data
  private readonly getProductURL: string = '/product/:id'; //for single products
  private readonly postProductsURL: string = '/items';
  private readonly putProductsURL: string = '/update/:id';
  private readonly deleteProductsURL: string = '/delete';

  //dependencies injections
  constructor(private http: HttpClient) {}
  //endpoint/url 
  fetchProducts() {
    //1st method ;=>  1st way to get the product.
    // return this.http.get('https://fakestoreapi.com/products',{
    //    headers:{
    //      "content-type" : "application/json"
    //       }
    //   });
    // 2nd method ;=> 2nd way to get the product.
    return this.http.get(`${this.baseURL}${this.getProductsURL}`, {
      headers: {
        'content-type': 'application/json',
      }
    });
    //3rd method ;=> 3rd way to get the product.
    // return this.http.get(this.baseURL + '/swati' + this.getProductsURL);
  }
  fetchSingleProducts(productId: any) {
    console.log(productId);
    console.log(this.baseURL);
    console.log(this.getProductURL);
    return this.http.get(`${this.baseURL}${this.getProductURL}/${productId}`);
    
  }
  // onTabClick(routerName: string){
  //   console.log('routerName', routerName);
  //   this.router.navigate([routerName,'id'], { relativeTo: this.currentRouter});
  // }

  addProducts(productBody: any) {
    // return this.http.get('https://fakestoreapi.com/products');
    // return this.http.post(`${this.baseURL} ${ this.getProductsURL}`,JSON.stringify(productBody));
    return this.http.post(
      `${this.baseURL}${this.getProductsURL}${this.postProductsURL}`, productBody);
  }

  putProduct(productId: any, productBody: any) {
    console.log(productId);
    console.log(this.baseURL);
    return this.http.put(
      `${this.baseURL}${this.getProductsURL}${this.putProductsURL}/${productId}`,productBody);
  }

  deleteProduct(productId: any, productBody: any) {
    return this.http.delete(
      `${this.baseURL}${this.getProductsURL}${this.deleteProductsURL}/${productId}`, productBody);
  }
}
