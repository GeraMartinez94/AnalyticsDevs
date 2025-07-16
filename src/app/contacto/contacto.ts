import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core'; // <-- Añadido OnDestroy
import { CommonModule, ViewportScroller } from '@angular/common'; // <-- ViewportScroller movido aquí
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <-- ¡Nuevas importaciones para Reactive Forms!

// Módulos de Angular Material para el formulario y otros elementos en el HTML
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // <-- Necesario para <mat-card>
import { MatIconModule } from '@angular/material/icon'; // <-- Necesario para <mat-icon>

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- ¡Importar ReactiveFormsModule aquí!
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule, // Asegúrate de importar MatCardModule
    MatIconModule  // Asegúrate de importar MatIconModule
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css', // styleUrl es la propiedad correcta para Angular 17+
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Puede que no sea necesario si todos los componentes son Angular o Material
})
export class ContactoComponent implements OnInit, OnDestroy { // <-- Implementa OnInit y OnDestroy
  private fragmentSubscription: Subscription | undefined;
  contactForm!: FormGroup; // Declara el FormGroup

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private fb: FormBuilder // <-- ¡Inyecta FormBuilder!
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del fragmento en la URL (tu lógica existente)
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

    // Inicializa el FormGroup con sus controles y validadores (¡Nueva lógica!)
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required], // Campo requerido
      email: ['', [Validators.required, Validators.email]], // Campo requerido y con formato de email
      mensaje: ['', Validators.required] // Campo requerido
    });
  }

  ngOnDestroy(): void {
    // Es importante desuscribirse para evitar fugas de memoria (tu lógica existente)
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
  }

  // Método para manejar el envío del formulario (¡Nueva lógica!)
  onSubmit(): void {
    if (this.contactForm.valid) {
      // Aquí manejarías la lógica de envío del formulario
      // Por ejemplo, enviar los datos a un servicio o API
      console.log('Formulario válido, datos:', this.contactForm.value);

      // Resetear el formulario después del envío exitoso
      this.contactForm.reset();
      // Opcional: Mostrar un mensaje de éxito al usuario
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    } else {
      // Marcar todos los campos como "touched" para mostrar los errores de validación
      this.contactForm.markAllAsTouched();
      console.log('Formulario inválido, revisa los campos.');
    }
  }
}