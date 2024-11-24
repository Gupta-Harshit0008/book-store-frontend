import { Routes } from '@angular/router';
import { FussionComponent } from './fussion/fussion.component';
import { BookDetailsDisplayComponent } from './book-details-display/book-details-display.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { adminGuard } from './gaurds/admin.guard';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { BookSearchComponent } from './book-search/book-search.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component:FussionComponent,canActivate:[authGuard]},
    {path:'admin',component:AdminportalComponent,canActivate:[authGuard,adminGuard]},
    {path:'cart',component:CartComponent,canActivate:[authGuard]},
    {path:':bookName/:id',component:BookDetailsDisplayComponent,canActivate:[authGuard]},
    {path:'searchResults',component:BookSearchComponent,canActivate:[authGuard]}
];
