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
useremail=sessionStorage.getItem('user')

  gettingCartItems(userid:any): Observable<any[]>{  
    const data={email:this.useremail,...userid}
    return this.http.post<any>(this.cartItemsUrl,data)
  }

  addingItemtToCart(cartData:any){
    const data={email:this.useremail,...cartData}
    return this.http.post(this.addingItemstoCartUrl,data)
  }
  deletingItemFromCart(deleteData:any){
    const data={email:this.useremail,...deleteData}
    return this.http.request('DELETE',this.removingItemfromCartUrl,{body:data})
  }
}
