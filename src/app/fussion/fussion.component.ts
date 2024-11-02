import { Component, OnInit } from '@angular/core';
import { BooksDisplayComponent } from '../books-display/books-display.component';
import { CarouselsComponent } from '../carousels/carousels.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-fussion',
  standalone: true,
  imports: [BooksDisplayComponent, CarouselsComponent],
  templateUrl: './fussion.component.html',
  styleUrl: './fussion.component.scss'
})
export class FussionComponent implements OnInit {
  userName:any
constructor(private userservice:UserService){}

  ngOnInit(): void {
    this.userName=this.userName=sessionStorage.getItem('user')
    const data={email:this.userName}
  this.userservice.userDetails(data).subscribe({
    next: (response)=>{
      console.log(response)
    },
    error :(err) =>{
      alert(err.message);
    }
  })
  }
}
