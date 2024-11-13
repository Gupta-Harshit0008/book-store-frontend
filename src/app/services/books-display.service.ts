import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDisplayService {

  constructor(private http:HttpClient) { }
  getallbooks='http://localhost:4100/books/'
  bookDetailsById='http://localhost:4100/books'
  empId=sessionStorage.getItem('user')
  ID={email:this.empId}

  getallBooks() : Observable<any[]>{
     return this.http.post<any>(this.getallbooks,this.ID).pipe(map(response => response.books_data));
  }

  getBookById(Bookid:any): Observable<any[]>{
    return this.http.post<any>(`http://localhost:4100/books/${Bookid}`,Bookid).pipe(map(response => response.book))
  }
}
