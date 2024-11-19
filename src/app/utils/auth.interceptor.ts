import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken=sessionStorage.getItem('token')
  const clonedRequest = req.clone({
    setHeaders: {
      authorization: authToken ? `Bearer ${authToken}` : ''
    }
  });
  return next(clonedRequest);
};
