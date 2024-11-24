import { Component, OnInit } from '@angular/core';
import { BooksDisplayService } from '../services/books-display.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent implements OnInit {
  BookName:any
  Data:any
  bookData:any

  constructor(private BookService:BooksDisplayService,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.BookName = params['q'];
      this.getresults();
    });

  }

  getresults(){
    this.BookService.getBookByName(this.BookName).subscribe({
      next: (response) =>{
        this.Data=response
        this.bookData=this.Data.BookByName
      },
    
      error: (err) =>{
        alert(err.message)
      }
    })
  }
  getImageSource(base64Data: string): string {
    return `data:image/png;base64,${base64Data}`;
  }
  showDetails(book:any){
    const bookName = book.name.replace(/\s+/g, '-');
    this.router.navigate([`/${bookName}/${book._id}`]);
  }

}
