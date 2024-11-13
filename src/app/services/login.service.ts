import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginUrl='http://localhost:4100/login'
  signupUrl='http://localhost:4100/signup'
  logoutUrl='http://localhost:4100/logout'


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
