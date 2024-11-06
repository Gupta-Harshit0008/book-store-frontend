import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsUrl='http://localhost:4100/itemsInCart'
  constructor(private http:HttpClient) { }

  gettingCartItems(userid:any): Observable<any[]>{  
    return this.http.post<any>(this.cartItemsUrl,userid).pipe(map(response => response.cartItemsDetails))
  }
}
