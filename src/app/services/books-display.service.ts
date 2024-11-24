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
  empId=sessionStorage.getItem('user')
  ID={email:this.empId}

  getallBooks() : Observable<any[]>{
     return this.http.post<any>(this.getallbooks,this.ID).pipe(map(response => response.books_data));
  }

  getBookById(Bookid:any): Observable<any[]>{
    const data ={email:this.empId,Bookid}
    return this.http.post<any>(`http://localhost:4100/books/${Bookid}`,data).pipe(map(response => response.book))
  }

  getBookByName(BookName:any): Observable<any[]>{
    const data={name:BookName}
    return this.http.post<any>(this.getBookByNameurl,data)
  }
}
