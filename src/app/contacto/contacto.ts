
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si usas ngIf, ngFor, etc.
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'
// Módulos de Angular Material para el formulario
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contacto',
 standalone: true,
  imports: [
     CommonModule,
    MatFormFieldModule, // <-- Importar
    MatInputModule,     // <-- Importar
    MatButtonModule 
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactoComponent  implements OnInit {
  private fragmentSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del fragmento en la URL
    this.fragmentSubscription = this.route.fragment
      .pipe(
        // Filtramos para asegurarnos de que solo actuamos cuando hay un fragmento
        filter(fragment => !!fragment)
      )
      .subscribe(fragment => {
        // Aumentamos el tiempo de espera para dar más tiempo a la renderización
        // Puedes ajustar este valor si es necesario (ej. 500ms, 700ms)
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment as string);
        }, 300); // Aumentado a 300ms
      });
  }

  ngOnDestroy(): void {
    // Es importante desuscribirse para evitar fugas de memoria
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }
}
