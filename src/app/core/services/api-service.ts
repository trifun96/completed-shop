import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //newsletter

  postNewsletter(data: any) {
    return this.http.post<any>('http://localhost:7000/newsletter', data);
  }

  getNewsletter() {
    return this.http.get<any>('http://localhost:7000/newsletter');
  };

  //orders

  postOrders(data: any) {
    return this.http.post<any>('http://localhost:7000/orders', data);
  };

  getOrders() {
    return this.http.get<any>('http://localhost:7000/orders');

  };

  deleteOrder(id: number) {
    return this.http.delete<any>('http://localhost:7000/orders/' + id);
  }

  //categories

  postCategories(data: any) {
    return this.http.post<any>('http://localhost:7000/categories', data);
  };

  getCategories() {
    return this.http.get<any>('http://localhost:7000/categories');

  };

  //filterCategory

  
  postFilterCategories(data: any) {
    return this.http.post<any>('http://localhost:7000/filterCategories', data);
  };

  getFilterCategories() {
    return this.http.get<any>('http://localhost:7000/filtercategories');

  };



  //categoryProducts

  postcategoryProducts(data: any) {
    return this.http.post<any>('http://localhost:7000/products', data);
  };

  getProducts() {
    return this.http.get<any>('http://localhost:7000/products');

  };

  deleteProducts(id: number) {
    return this.http.delete<any>('http://localhost:7000/products/' + id);
  }
  
  updateProducts(data: any, id: number) {
    return this.http.put<any>('http://localhost:7000/products/' + id, data);

  };


}
