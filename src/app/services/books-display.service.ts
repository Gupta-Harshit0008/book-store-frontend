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


  getallBooks() : Observable<any[]>{
     return this.http.get<any>(this.getallbooks).pipe(map(response => response.books_data));
  }

  getBookById(Bookid:any): Observable<any[]>{
    return this.http.post<any>(`http://localhost:4100/books/${Bookid}`,Bookid).pipe(map(response => response.book))
  }
}
