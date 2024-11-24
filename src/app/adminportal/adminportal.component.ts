import { Component, inject } from '@angular/core';
import { AddBooksComponent } from "../add-books/add-books.component";
import { CommonModule } from '@angular/common';
import { flush } from '@angular/core/testing';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-adminportal',
  standalone: true,
  imports: [AddBooksComponent,CommonModule],
  templateUrl: './adminportal.component.html',
  styleUrl: './adminportal.component.scss'
})
export class AdminportalComponent {
  bookAdding:boolean=false;
  viewreports:boolean=false;
  
  loaderService =inject(LoaderService)

  isLoading = this.loaderService.loader$;

  newBook(){
    this.bookAdding=true
    this.viewreports=false
  }

  reports(){
    this.bookAdding=false
    this.viewreports=true
  }
}
