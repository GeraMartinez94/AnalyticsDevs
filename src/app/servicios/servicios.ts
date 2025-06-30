import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';     // Para las tarjetas de servicio
import { MatIconModule } from '@angular/material/icon';  
@Component({
  selector: 'app-servicios',
    standalone: true,
  imports: [MatCardModule,
    MatIconModule
  ],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class ServiciosComponent {

}
