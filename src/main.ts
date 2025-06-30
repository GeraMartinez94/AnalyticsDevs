// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http'; // <-- ¡IMPORTA ESTO!

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient() // <-- ¡AÑADE ESTO AQUÍ!
  ]
}).catch(err => console.error(err));