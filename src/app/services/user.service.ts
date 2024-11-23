import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
 UserDetailUrl='https://book-store-backend-1-kjtz.onrender.com/userDetails/';
 private dataSubject = new BehaviorSubject<any | null>(null);

 userDetails(userid:any): Observable<any[]>{
  if(!this.dataSubject.value){
    this.http.post<any>(this.UserDetailUrl,userid).pipe(tap(data => this.dataSubject.next(data))).subscribe()
  }
  return this.dataSubject.asObservable();
}
}
