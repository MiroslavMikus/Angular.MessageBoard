import { Component, ViewChild } from '@angular/core';
import { NewMessageComponent } from './new-message-component';
import { MessageComponent } from './messages-component';


@Component({
  selector: 'my-app',
  template: `
  <h1>Message Board</h1>
  <new-message (onPosted)="onPosted($event)"></new-message>
  <messages></messages>`,
})

export class AppComponent  {

  @ViewChild(MessageComponent) messages : MessageComponent

  onPosted(message){
    this.messages.messages.push(message);
  }
}
