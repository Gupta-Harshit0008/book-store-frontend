import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

userName:any
userdetails:any
constructor(private router:Router,private userservice:UserService,private loginservice:LoginService){}
  ngOnInit(): void {
    this.userName=sessionStorage.getItem('user')
    const data={email:this.userName}
  this.userservice.userDetails(data).subscribe({
    next: (response)=>{
      this.userdetails=response
    },
    error :(err) =>{
      alert(err.message);
    }
  })
  }
  logout(){
    const data={email:this.userName}
    this.loginservice.logout(data).subscribe({next :(response)=>{},error : (error)=>{
      console.log(error.message)
    }})
    sessionStorage.removeItem('user')
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
    })
  }
}
