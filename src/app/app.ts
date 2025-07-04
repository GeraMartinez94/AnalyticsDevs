import { CommonModule } from '@angular/common'; // Necesario para directivas como *ngIf, *ngFor
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; // RouterLink para el nav, RouterOutlet para el contenido de la ruta
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE
import {
  trigger,
  transition,
  style,
  query,
  animate, // <-- Aquí está el módulo animate
  group,
  animateChild
} from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true, // Esto es CRUCIAL para un componente standalone
  imports: [
    CommonModule,
    RouterOutlet, // Permite que <router-outlet> funcione en app.html
    RouterLink,   // Permite que [routerLink] funcione en app.html
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './app.html', // O './app.component.html' si usas esa convención
  styleUrl: './app.css',     // O './app.component.scss' si usas SCSS
   animations: [ // Aquí van tus animaciones de ruta
    trigger('routeAnimations', [
      transition('* <=> *', [ // Aplica a todas las transiciones de ruta
        style({ position: 'relative' }), // Establece la posición relativa para el contenedor
        query(':enter, :leave', [ // Selecciona los componentes que entran y salen
          style({
            position: 'absolute', // Componentes entrando/saliendo se posicionan absolutos
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0, // Inician o terminan invisibles
            transform: 'translateX(100%)' // Inician fuera de la pantalla (a la derecha)
          })
        ], { optional: true }), // optional: true para evitar errores si no hay :enter o :leave
        query(':enter', [
          // DURACIÓN AJUSTADA AQUÍ DE 0.5s A 0.3s
          animate('0.3s ease-out', style({ opacity: 1, transform: 'translateX(0%)' })) // El componente que entra se desliza y desvanece
        ], { optional: true }),
        query(':leave', [ // Anima la salida del componente (se desvanece y va a la izquierda)
          // DURACIÓN AJUSTADA AQUÍ DE 0.5s A 0.3s
          animate('0.3s ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
        ], { optional: true })
      ]),
    ])
  ]
})
export class App implements OnInit { // Asegúrate de implementar OnInit si usas ngOnInit
  protected title = 'AnalyticsDevs';
  isMobileMenuOpen = false;
  currentYear!: number;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Registra tus iconos SVG para Angular Material
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./public/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./public/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./public/twitter.svg')
    );
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Función necesaria para pasar el 'data.animation' al trigger en el HTML
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}