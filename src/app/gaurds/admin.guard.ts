import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
 const router=inject(Router)

let isAdmin=sessionStorage.getItem('a')
 
 if(isAdmin === 'true'){
  console.log(isAdmin)
  return true;
}
  else{
    router.navigateByUrl('home');
    return false
  }
};
