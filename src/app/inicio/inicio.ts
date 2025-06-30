import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si usas directivas comunes
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
   standalone: true, // ¡ESTO ES CLAVE para standalone! 
  imports: [CommonModule,
    RouterLink,
    MatButtonModule, // <-- ¡Importar!
    MatIconModule   ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {
 constructor() { }

  ngOnInit(): void {
  }
}
