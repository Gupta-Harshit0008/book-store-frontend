import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  userId:any
  constructor(private cartservice:CartService){}

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    this.cartservice.gettingCartItems({userId:this.userId}).subscribe({
      next : (response)=>{
        console.log(response)
      },
      error : (err) =>{
        alert(err.message);
      }
    })
  }
}
