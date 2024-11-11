import { Component, OnInit } from '@angular/core';
import { BooksDisplayComponent } from '../books-display/books-display.component';
import { CarouselsComponent } from '../carousels/carousels.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fussion',
  standalone: true,
  imports: [BooksDisplayComponent, CarouselsComponent],
  templateUrl: './fussion.component.html',
  styleUrl: './fussion.component.scss'
})
export class FussionComponent implements OnInit {
  userName:any
  data:any
  userdetails:any
  cartCount:any
constructor(private userservice:UserService,private router:Router){}

  ngOnInit(): void {
    this.userName=this.userName=sessionStorage.getItem('user')
    const data={email:this.userName}
  this.userservice.userDetails(data).subscribe({
    next: (response)=>{
      this.userdetails=response
      this.cartCount=this.userdetails.CartCount
      this.data=this.userdetails.userDetails
      sessionStorage.setItem('userId',this.data._id)
    },
    error :(err) =>{
      alert(err.message);
    }
  })

  }

  cart(){
this.router.navigateByUrl('cart')
  }
}
