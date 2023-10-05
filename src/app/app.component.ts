import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
}
