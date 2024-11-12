import { Component } from '@angular/core';
import { AddBooksComponent } from "../add-books/add-books.component";

@Component({
  selector: 'app-adminportal',
  standalone: true,
  imports: [AddBooksComponent],
  templateUrl: './adminportal.component.html',
  styleUrl: './adminportal.component.scss'
})
export class AdminportalComponent {

}
