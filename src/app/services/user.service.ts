import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
 UserDetailUrl='http://localhost:4100/userDetails/';

 userDetails(userid:any): Observable<any[]>{
  return this.http.post<any>(this.UserDetailUrl,userid)
}
}
