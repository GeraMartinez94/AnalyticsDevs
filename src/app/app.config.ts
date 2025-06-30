import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Importa provideRouter

import { routes } from './app.routes'; // ¡Importa tus rutas definidas en app.routes.ts!

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)] // ¡Aquí se le dice a Angular que use tus rutas!
};