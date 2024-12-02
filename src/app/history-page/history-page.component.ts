import { Component, OnInit } from '@angular/core';
import { BooksDisplayService } from '../services/books-display.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.scss'
})
export class HistoryPageComponent implements OnInit{
  userId:any
constructor(private Bookservice: BooksDisplayService){}
history:any
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    this.Bookservice.getBuyHistory(this.userId).subscribe({
      next: (response)=>{
        const data:any=response
        this.history=data.purchasedDetails
    },
      error : (err)=>{
        alert(err.message)
      }
    })
  }
    
}
