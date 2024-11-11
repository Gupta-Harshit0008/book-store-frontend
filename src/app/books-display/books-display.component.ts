import { Component, OnInit } from '@angular/core';
import { BooksDisplayService } from '../services/books-display.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.scss'
})


export class BooksDisplayComponent implements OnInit{

  booksData:any
  constructor(private bookService:BooksDisplayService,private router:Router){

  }
  ngOnInit(): void {
    this.bookService.getallBooks().subscribe(data=>{
      this.booksData=data
    })
  }

  showDetails(book:any){
    const bookName = book.name.replace(/\s+/g, '-');
    this.router.navigate([`/${bookName}/${book._id}`]);
  }
}
