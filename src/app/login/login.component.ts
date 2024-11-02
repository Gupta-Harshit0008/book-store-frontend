import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:boolean=true;
  signUpForm:boolean=false;
  userName:any
  password:any
  logindata:any
  signUpData:any
  username:any
  userEmail:any
  userPassword:any
  userCPassword:any

  constructor(private router: Router,private loginservice:LoginService){

  }

  login(){
    this.logindata={
      email:this.userName,
      password:this.password
    }
    this.loginservice.login(this.logindata).subscribe({
      next: (response)=>{
        sessionStorage.setItem('user',this.userName)
        this.router.navigateByUrl('home')
      },
      error :(err) =>{
        alert(err.message);
        this.router.navigateByUrl('')
      }
    }
    )
  }
  signUp(){
    this.signUpData={
      userName:this.username,
      email:this.userEmail,
      password:this.userPassword,
      confirmPassword:this.userCPassword
    }
    console.log(this.signUpData)
    this.loginservice.signUp(this.signUpData).subscribe({
      next: (response)=>{
        alert('User signUp successfully, kindy login to proceed')
        this.loginForm=true;
    this.signUpForm=false;
        this.router.navigateByUrl('login')
      },
      error :(err) =>{
        alert(err.message);
      }
    })
  }
  signUpClick(){
    this.loginForm=false;
    this.signUpForm=true;
  }
  loginClick(){
    this.loginForm=true;
    this.signUpForm=false;
  }
}
