import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Para el botón "Conoce más"
import { MatCardModule } from '@angular/material/card'; 
@Component({
  selector: 'app-inicio',
   standalone: true, // ¡ESTO ES CLAVE para standalone! 
  imports: [CommonModule, MatButtonModule, // Añade MatButtonModule para usar mat-button
    MatCardModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

}
