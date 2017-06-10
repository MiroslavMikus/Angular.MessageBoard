import { Component } from '@angular/core'

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
    messages = [{text:'some Text', owner:'MMI'},{text:'Hallo', owner:'ETR'}];
}