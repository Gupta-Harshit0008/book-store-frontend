import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  const authToken=sessionStorage.getItem('token')


  loaderService.showLoader(); // Show the loader


  const clonedRequest = req.clone({
    setHeaders: {
      authorization: authToken ? `Bearer ${authToken}` : ''
    }
  });
  return next(clonedRequest).pipe(
    finalize(() => loaderService.hideLoader()) // Hide the loader when the request completes
  );
};
