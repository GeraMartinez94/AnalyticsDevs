import { Routes } from '@angular/router';
import { InicioComponent } from '../app/inicio/inicio';
import { NosotrosComponent } from '../app/nosotros/nosotros';
import { ServiciosComponent } from '../app/servicios/servicios';
import { ContactoComponent } from '../app/contacto/contacto';
import { ChatbotComponent } from './chatbot/chatbot';

export const routes: Routes = [
  { path: '', component: InicioComponent , data: { animation: 'InicioPage' } },
  { path: 'nosotros', component: NosotrosComponent, data: { animation: 'NosotrosPage' } },
  { path: 'servicios', component: ServiciosComponent, data: { animation: 'ServiciosPage' } },
  { path: 'contacto', component: ContactoComponent, data: { animation: 'ContactoPage' } },
    { path: 'chatbot', component: ChatbotComponent, data: { animation: 'ChatBotPage' }  },
  // Añade una ruta comodín para redirigir a inicio si la ruta no existe (buena práctica)
  { path: '**', redirectTo: '' }
];