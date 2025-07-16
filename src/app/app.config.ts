import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- 1. Importa esto para las animaciones
import { provideHttpClient } from '@angular/common/http'; // <-- 2. Si usas HttpClient para peticiones web

import { routes } from './app.routes'; // Importa tus rutas definidas en app.routes.ts

// 3. Opcional: Importa los módulos de Angular Material que necesites globalmente.
//    Generalmente, en standalone, los módulos de Material se importan directamente
//    en los componentes que los usan (ej. en los 'imports' de AppComponent).
//    Sin embargo, si tienes algún proveedor o servicio de Material que necesite
//    ser configurado globalmente (como el adaptador de fecha), lo harías aquí.
//    Para el propósito de las animaciones, 'provideAnimations()' es lo principal.
import { provideNativeDateAdapter } from '@angular/material/core'; // Ejemplo si usas MatDatepicker


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // <-- ¡Habilita las animaciones aquí!
    provideHttpClient(), // Si tu aplicación hace peticiones HTTP
    provideNativeDateAdapter(), // Si usas componentes de fecha de Material
  ]
};