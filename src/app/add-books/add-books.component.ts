import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  SelectedFile:File | null= null;

  loaderService =inject(LoaderService)

  isLoading = this.loaderService.loader$;

  constructor(private adminservice:AdminService,private router:Router){}
  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.SelectedFile = input.files[0];
    }
  }

  addBook(){
    this.data={
      bookImage:this.SelectedFile,
      name:this.bookName,
      price:this.bookPrice,
      Author:this.bookAuthor,
      quantity:this.bookQuantity,
      desc:this.bookDesc,
      publisher:this.bookPublisher,
      language:this.bookLanguage
    }
    this.adminservice.addNewBook(this.data).subscribe({
      next : (response)=>{
        alert('Book Added successfully')
        this.router.navigate(['home'])
      },
      error : (err)=>{
        alert(err.message)
      }
      
    })
    // console.log(this.data)
  }
}
