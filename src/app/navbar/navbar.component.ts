import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { BooksDisplayService } from '../services/books-display.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

userName:any
userdetails:any
BookName:any;
constructor(private router:Router,private userservice:UserService,private loginservice:LoginService,private Bookservice:BooksDisplayService){}
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
  searchBook(){
    this.router.navigate(['/searchResults'], { queryParams: { q: this.BookName } })
  }
}
