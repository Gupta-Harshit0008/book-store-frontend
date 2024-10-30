import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName:any
  password:any

  constructor(private router: Router){

  }

  login(){
if(this.userName=== 'harsh' ){
  alert('loggedin')
this.router.navigateByUrl('home')
sessionStorage.setItem('user',this.userName)
}
else{
  alert('not loggedin')
  this.router.navigateByUrl('')
}
  }
}
