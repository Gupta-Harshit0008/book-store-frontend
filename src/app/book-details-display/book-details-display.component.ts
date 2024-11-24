import { Component, inject, OnInit } from '@angular/core';
import { BooksDisplayService } from '../services/books-display.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-book-details-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details-display.component.html',
  styleUrl: './book-details-display.component.scss'
})
export class BookDetailsDisplayComponent implements OnInit {

  books:any
  bookId:any

  loaderService =inject(LoaderService)

  isLoading = this.loaderService.loader$;
constructor(private booksService : BooksDisplayService,private activated:ActivatedRoute,private cartServcie:CartService,private router:Router){

}
ngOnInit(): void {
 this.bookId= this.activated.snapshot.paramMap.get('id')
  this.booksService.getBookById(this.bookId).subscribe((data:any) =>{
    this.books=data
  }
  )
}
addToCart(){
  const payload={
    bookId:this.bookId,
    userId:sessionStorage.getItem('userId'),
    quantity:1
  }
  this.cartServcie.addingItemtToCart(payload).subscribe((data:any)=>{
    if(data){
      alert('Book added to cart successfully')
    }
        this.router.navigateByUrl('cart')
  })
}

getImageSource(base64Data: string): string {
  return `data:image/png;base64,${base64Data}`;
}
}
