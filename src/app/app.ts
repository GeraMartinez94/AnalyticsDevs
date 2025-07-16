import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations'; // Asegúrate de importar los elementos necesarios
import { RouterOutlet } from '@angular/router'; // Asegúrate de importar RouterOutlet

// Importaciones de Angular Material que usa app.component.html
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Para ngIf, ngFor si los usas
import { RouterModule } from '@angular/router'; // Para routerLink, routerLinkActive


// Define la animación de transición de página
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [ // Aplica a cualquier transición de ruta
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0, // Inicia invisible
        transform: 'translateX(100%)', // Viene desde la derecha
      }),
    ], { optional: true }),
    query(':leave', [
      animate('0.3s ease-out', style({
        opacity: 0,
        transform: 'translateX(-100%)', // Sale hacia la izquierda
      })),
    ], { optional: true }),
    query(':enter', [
      animate('0.3s ease-in', style({
        opacity: 1,
        transform: 'translateX(0%)', // Entra en su posición final
      })),
    ], { optional: true }),
  ]),
]);


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [routeAnimations], // <-- Añade las animaciones aquí
  standalone: true, // <-- ¡Importante! Marca el componente como standalone
  imports: [ // <-- Importa aquí todos los módulos que usa tu template de app.component.html
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    // ... otros módulos de Material o componentes que uses directamente en app.component.html
  ]
})
export class AppComponent {
  title = 'AnalyticsDevs';
  currentYear: number = new Date().getFullYear();

  // Método para preparar los datos de la ruta (necesario para las animaciones)
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}