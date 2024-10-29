import { Component, OnInit } from '@angular/core';
import { BooksDisplayService } from '../services/books-display.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
constructor(private booksService : BooksDisplayService,private activated:ActivatedRoute){

}
ngOnInit(): void {
 this.bookId= this.activated.snapshot.paramMap.get('id')
 console.log(this.bookId)
  this.booksService.getBookById(this.bookId).subscribe((data:any) =>{
    this.books=data

  }
    
  )
}
}
