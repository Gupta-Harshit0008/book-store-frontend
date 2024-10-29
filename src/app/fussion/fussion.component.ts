import { Component } from '@angular/core';
import { BooksDisplayComponent } from '../books-display/books-display.component';
import { CarouselsComponent } from '../carousels/carousels.component';

@Component({
  selector: 'app-fussion',
  standalone: true,
  imports: [BooksDisplayComponent, CarouselsComponent],
  templateUrl: './fussion.component.html',
  styleUrl: './fussion.component.scss'
})
export class FussionComponent {

}
