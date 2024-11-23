import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {}

  addNewBookUrl='https://book-store-backend-1-kjtz.onrender.com/books/addNewBook/'
  userEmail=sessionStorage.getItem('user')
  addNewBook(bookData:any){
    const data={email:this.userEmail,...bookData}
    return this.http.post(this.addNewBookUrl,data)
  }

}
