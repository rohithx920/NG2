import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello</h2>
    <event-list></event-list> 
    `
})
export class AppComponent {
  name = 'app works!';
}