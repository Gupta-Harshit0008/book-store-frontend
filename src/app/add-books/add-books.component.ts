import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.scss'
})
export class AddBooksComponent implements OnInit {
  bookName!:string
  bookPrice!:number
  bookAuthor!:string
  bookQuantity!:string
  bookDesc!:string
  bookPublisher!:string
  bookLanguage!:string
  data:any
  ngOnInit(): void {
    
  }
  addBook(){
    this.data={
      name:this.bookName,
      price:this.bookPrice,
      Author:this.bookAuthor,
      quantity:this.bookQuantity,
      desc:this.bookDesc,
      publisher:this.bookPublisher,
      language:this.bookLanguage
    }
    // console.log(this.data)
  }
}
