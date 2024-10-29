import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BooksDisplayComponent } from './books-display/books-display.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { FussionComponent } from "./fussion/fussion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onlineBookStoreFrontend';
}
