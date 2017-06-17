import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component(
{
    selector: 'messages',
    template: `
    <div style="background=white" *ngFor="let message of messages">
        <md-card class="MdCard">
            <md-card-title>{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})

export class MessageComponent{

    constructor(private webService : WebService){}

    async ngOnInit(){
      var response = await this.webService.getMessages();
      this.messages = response.json();
    }

    messages = [];
}