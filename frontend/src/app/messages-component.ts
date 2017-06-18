import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component(
{
    selector: 'messages',
    template: `
    <div style="background=white" *ngFor="let message of messages">
        <md-card class="MdCard">
            <md-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer" >{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})

export class MessageComponent{

    constructor(private webService : WebService, private route : ActivatedRoute){}

    messages;

    ngOnInit(){
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.messages.subscribe(messages => {
            this.messages = messages;
        })
    }

}