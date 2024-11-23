import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './utils/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), // Required for ngx-spinner animations
    importProvidersFrom(NgxSpinnerModule.forRoot()) // Register the spinner globally,
    ,provideHttpClient(withInterceptors([authInterceptor])),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
