import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {}

  addNewBookUrl='http://localhost:4100/books/addNewBook/'

  addNewBook(bookData:any){
    return this.http.post(this.addNewBookUrl,bookData)
  }

}
