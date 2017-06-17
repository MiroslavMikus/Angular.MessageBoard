import { Component } from '@angular/core';
import { NewMessageComponent } from './new-message-component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Message Board</h1>
  <new-message></new-message>
  <messages></messages>`,
})

export class AppComponent  {}
