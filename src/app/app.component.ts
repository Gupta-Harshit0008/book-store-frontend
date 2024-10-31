import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BooksDisplayComponent } from './books-display/books-display.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { FussionComponent } from "./fussion/fussion.component";
import { CommonModule } from '@angular/common';

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
ngOnInit(): void {
  this.isLoggedIn()
}

  
isLoggedIn(){
  const userName=sessionStorage.getItem('user')
if(userName != null){
  this.isLoggedin=true
}
else{
  this.isLoggedin=false;
}
}
}
