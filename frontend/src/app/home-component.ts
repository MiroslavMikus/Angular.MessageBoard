import { Component } from '@angular/core';

import { NewMessageComponent } from './new-message-component';
import { MessageComponent } from './messages-component';
import { NavComponent } from './nav-component';


@Component({
  selector: 'home',
  template: `
  <new-message></new-message>
  <messages></messages>`,
})

export class HomeComponent  {

}
