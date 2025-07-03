import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- IMPORTANTE
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'] // <-- Era 'styleUrl', debe ser 'styleUrls'
})
export class ChatbotComponent {
  messages: { sender: string; text: string }[] = [];
  userInput = '';

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ sender: 'Usuario', text: this.userInput });

    const response = this.getBotResponse(this.userInput);
    this.messages.push({ sender: 'Bot', text: response });

    this.userInput = '';
  }

  getBotResponse(message: string): string {
    const lower = message.toLowerCase();
    if (lower.includes('hola')) return '¡Hola! ¿En qué puedo ayudarte?';
    if (lower.includes('adiós')) return '¡Hasta luego!';
    return 'No entiendo, ¿puedes repetirlo?';
  }
}
