import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsUrl='http://localhost:4100/itemsInCart'
  addingItemstoCartUrl='http://localhost:4100/addingBooksToCart'
  removingItemfromCartUrl='http://localhost:4100/deleteItemFromCart'
  constructor(private http:HttpClient) { }

  gettingCartItems(userid:any): Observable<any[]>{  
    return this.http.post<any>(this.cartItemsUrl,userid)
  }

  addingItemtToCart(cartData:any){
    return this.http.post(this.addingItemstoCartUrl,cartData)
  }
  deletingItemFromCart(deleteData:any){
    return this.http.request('DELETE',this.removingItemfromCartUrl,{body:deleteData})
  }
}
