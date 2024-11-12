import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
 const userService=inject(UserService)
 const router=inject(Router)
let isAdmin:boolean

 const userName=sessionStorage.getItem('user')
 const data={email:userName}

 userService.userDetails(data).subscribe(response=>{
  const userData:any=response
  const {userDetails}= userData
  isAdmin=userDetails.isAdmin
  // console.log(isAdmin)
  if(isAdmin){
    return 1;
  }
  else{
    return false;
  }
 })
 
 if(1){
  return true;
}
  else{
    return false
  }
};
