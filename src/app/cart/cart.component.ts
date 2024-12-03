import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  userId:any
  Data:any
  cartData:any
  itemsInCart:any
  constructor(private cartservice:CartService,private router:Router){}

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    this.cartservice.gettingCartItems({userId:this.userId}).subscribe({
      next : (response)=>{
        this.Data=response
        this.itemsInCart=this.Data.Items
        const cartItemsDetails=this.Data.cartItemsDetails
        const Items=this.Data.Items

        const mergedArray = cartItemsDetails.map((book : any) => {
          const matchingItem = Items.find((item : any) => item.bookId === book._id);
      
          return {
              ...book,
              quantity: matchingItem ? matchingItem.quantity : 0 // Add quantity if matching item found, else 0
          };
      });
      
      this.cartData=mergedArray
      },
      error : (err) =>{
        alert(err.message);
      }
    })
  }

  increment(i:any){
    this.cartData[i].quantity += 1;
    const payload={
      bookId:this.Data.Items[i].bookId,
      userId:sessionStorage.getItem('userId'),
      quantity:this.cartData[i].quantity
    }
    this.cartservice.addingItemtToCart(payload).subscribe((data:any)=>{
      if(data){
        // console.log(data)
        this.cartservice.gettingCartItems({userId:this.userId}).subscribe({
          next : (response)=>{
            this.Data=response
            this.itemsInCart=this.Data.Items
      }
      })
      }
    })
  }

  decrement(i:any){
    if(this.cartData[i].quantity>1){
      this.cartData[i].quantity -= 1;
      const payload={
        bookId:this.Data.Items[i].bookId,
        userId:sessionStorage.getItem('userId'),
        quantity:this.cartData[i].quantity
      }
      this.cartservice.addingItemtToCart(payload).subscribe((data:any)=>{
        if(data){
          this.cartservice.gettingCartItems({userId:this.userId}).subscribe({
            next : (response)=>{
              this.Data=response
              this.itemsInCart=this.Data.Items
        }
        })
          // console.log(data)
        }
      })
    }
    
  }

  getTotalPrice(): number {
    return this.cartData.reduce((total:any, item:any) => total + (item.price*item.quantity), 0);
  }

  deletefromCart(data:any){
    const deleteDataPayload=this.Data.Items[data]._id
    // console.log(deleteDataPayload)
 this.cartservice.deletingItemFromCart({itemId:deleteDataPayload}).subscribe({
  next: (response) =>{
    // console.log(response);
    alert('Book have been removed successfully')
    this.cartData.splice(data,1)
  },
  error : (err) =>{
    alert(err.message);
  }
 })
  }
  getImageSource(base64Data: string): string {
    return `data:image/png;base64,${base64Data}`;
  }

  proceedToBuy(){
    const simplifiedData:any = this.itemsInCart.map((item:CartItem) => ({ bookId:item.bookId, quantity:item.quantity }));
const data={booksdetails:simplifiedData};
this.cartservice.proceedToBuy(data).subscribe({
  next : (response) =>{
    console.log(response)
    alert('Order SuccessFully placed')
    this.router.navigate(['/home']) 
  },

  error : (err) =>{
    alert(err)
  }
  
})
  }
}
interface CartItem {
  bookId: string;
  quantity: number;
}