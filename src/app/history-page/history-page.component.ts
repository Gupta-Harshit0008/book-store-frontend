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
  history:any
  
constructor(private Bookservice: BooksDisplayService){}
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    this.Bookservice.getBuyHistory(this.userId).subscribe({
      next: (response)=>{
        const data:any=response
        const purchasedDetails:any=data.purchasedDetails
        const BookDetails:any=data.BookDetails

        const mergedDetails = purchasedDetails.map((purchase : any) => {
          const bookDetail = BookDetails.find((book : any) => book._id === purchase.bookId);
          return {
            ...purchase,
            ...bookDetail // Merge book details into the purchase object
          };
        });
        this.history=mergedDetails
    },
      error : (err)=>{
        alert(err.message)
      }
    })
  }
    
}
