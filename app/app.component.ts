import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello</h2>
    <event-list></event-list> 
    `,
    styles:[`
    
    .well div { color: green; }
    `]
})
export class AppComponent {
  name = 'app works!';
}