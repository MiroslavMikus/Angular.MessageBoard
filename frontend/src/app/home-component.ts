import { Component } from '@angular/core';

import { NewMessageComponent } from './new-message-component';
import { MessageComponent } from './messages-component';
import { NavComponent } from './nav-component';
import { AuthService } from './auth-service';


@Component({
  selector: 'home',
  template: `
  <new-message *ngIf="auth.isAuthenticated"></new-message>
  <messages></messages>`,
})

export class HomeComponent  {

    constructor(private auth : AuthService){}

}
