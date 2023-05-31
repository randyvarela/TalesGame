import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Compartir app', url: '/share', icon: 'share' },
    { title: 'Puntuar app', url: '/rate', icon: 'heart' },
    { title: 'Sobre la app', url: '/about', icon: 'information-circle' },
    { title: 'Contacto', url: '/contact', icon: 'people' },
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}*/
}
