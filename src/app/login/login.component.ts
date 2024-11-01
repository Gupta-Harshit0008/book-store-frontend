import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName:any
  password:any
  logindata:any
  loginstatus:any

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
}
