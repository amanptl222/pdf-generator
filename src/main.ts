import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config'; // Import your appConfig if needed
import { routes } from './app/app.routes'; // Import your routes
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]}).catch(err => console.error(err));
