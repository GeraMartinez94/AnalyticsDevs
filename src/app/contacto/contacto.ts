
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si usas ngIf, ngFor, etc.

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
  constructor() { }

  ngOnInit(): void {
  }
}
