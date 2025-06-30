import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';     // Para la tarjeta del formulario
// --- Módulos de Formularios (importante para ngModel o Reactive Forms) ---
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    MatInputModule,      // Para input fields
    MatFormFieldModule,  // Para envolver los input fields de Material
    MatButtonModule,     // Para el botón de enviar
    MatCardModule,       // Para la tarjeta del formulario
    ReactiveFormsModule, // Para formularios reactivos
    FormsModule 
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {

}
