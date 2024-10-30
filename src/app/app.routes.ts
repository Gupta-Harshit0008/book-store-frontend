import { Routes } from '@angular/router';
import { FussionComponent } from './fussion/fussion.component';
import { BookDetailsDisplayComponent } from './book-details-display/book-details-display.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component:FussionComponent,canActivate:[authGuard]},
    {path:':bookName/:id',component:BookDetailsDisplayComponent,canActivate:[authGuard]}
    
];
