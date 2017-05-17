import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-story',
  template: `
    <h3>{{name}}</h3>
  `
})

export class StoryComponent {
  name = "hello world";
}


