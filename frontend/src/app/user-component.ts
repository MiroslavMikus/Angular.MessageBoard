import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component(
{
    selector: 'user',
    template: `
    <md-card class="MdCard">
        <md-input-container>
            <input [(ngModel)]="model.firstName" mdInput placeholder="First Name">
        </md-input-container>
        <md-input-container>
            <input [(ngModel)]="model.lastName" mdInput placeholder="Last Name">
        </md-input-container>
        <button md-raised-button color="primary" (click)="saveUser(model)">Save Changes </button>
    </md-card>
    `
})

export class UserComponent{

    constructor(private webService : WebService){}

    model = {
        firstName: '',
        lastName: ''
    }

    ngOnInit(){
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    saveUser(userData){
        this.webService.saveUser(userData).subscribe();
    }

}