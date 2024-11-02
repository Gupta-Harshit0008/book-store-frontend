import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BooksDisplayComponent } from './books-display/books-display.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { FussionComponent } from "./fussion/fussion.component";
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'onlineBookStoreFrontend';
  isLoggedin:boolean=false
  userName:any
constructor(private userservice:UserService){}

  ngOnInit(): void {
  this.isLoggedIn()
}

  
isLoggedIn(){
  this.userName=sessionStorage.getItem('user')
if(this.userName != null){
  this.isLoggedin=true
}
else{
  this.isLoggedin=false;
}
}
}
