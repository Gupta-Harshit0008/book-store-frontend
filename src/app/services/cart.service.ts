import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsUrl='https://book-store-backend-1-kjtz.onrender.com/itemsInCart'
  addingItemstoCartUrl='https://book-store-backend-1-kjtz.onrender.com/addingBooksToCart'
  removingItemfromCartUrl='https://book-store-backend-1-kjtz.onrender.com/deleteItemFromCart'
  proceedToOrderUrl='https://book-store-backend-1-kjtz.onrender.com/order/purchaseorder/'
  constructor(private http:HttpClient) { }
useremail=sessionStorage.getItem('user')
userId=sessionStorage.getItem('userId')

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

  proceedToBuy(bookData:any){
    const data={userId:this.userId,...bookData}
return this.http.post(this.proceedToOrderUrl,data)
  }
}
