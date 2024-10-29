import { Routes } from '@angular/router';
import { FussionComponent } from './fussion/fussion.component';
import { BookDetailsDisplayComponent } from './book-details-display/book-details-display.component';

export const routes: Routes = [
    {path:'',component:FussionComponent},
    {path:':bookName/:id',component:BookDetailsDisplayComponent}
];
