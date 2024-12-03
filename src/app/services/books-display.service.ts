import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDisplayService {

  constructor(private http:HttpClient) { }
  getallbooks='https://book-store-backend-1-kjtz.onrender.com/books/'
  getBookByNameurl='https://book-store-backend-1-kjtz.onrender.com/books/Bookname/'
  getHistory='https://book-store-backend-1-kjtz.onrender.com/order/purchaseorderdetails/'
  empuserId=sessionStorage.getItem('user')
  ID={email:this.empuserId}

  getallBooks() : Observable<any[]>{
     return this.http.post<any>(this.getallbooks,this.ID).pipe(map(response => response.books_data));
  }

  getBookById(Bookid:any): Observable<any[]>{
    const data ={email:this.empuserId,Bookid}
    return this.http.post<any>(`https://book-store-backend-1-kjtz.onrender.com/books/${Bookid}`,data).pipe(map(response => response.book))
  }

  getBookByName(BookName:any): Observable<any[]>{
    const data={name:BookName}
    return this.http.post<any>(this.getBookByNameurl,data)
  }

  getBuyHistory(empId:any):Observable<any[]>{
    const data={userId:empId}
    return this.http.post<any>(this.getHistory,data)
  }
}
