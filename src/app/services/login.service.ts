import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginUrl='https://book-store-backend-1-kjtz.onrender.com/login'
  signupUrl='https://book-store-backend-1-kjtz.onrender.com/signup'
  logoutUrl='https://book-store-backend-1-kjtz.onrender.com/logout'


  login(loginDetails:any) : Observable<any[]>{
    return this.http.post<any>(this.loginUrl,loginDetails);
  }

  signUp(signUp:any) : Observable<any[]>{
    return this.http.post<any>(this.signupUrl,signUp);
  }

  logout(data:any) {
    return this.http.post(this.logoutUrl,data)
  }
}
