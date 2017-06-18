import { Component } from '@angular/core';
import { AuthService } from './auth-service';

@Component(
{
    selector: 'login',
    template: `
    <md-card class="MdCard">
        <md-input-container>
            <input [(ngModel)]="loginData.email" mdInput placeholder="Email" type="email">
        </md-input-container>
        <md-input-container>
            <input [(ngModel)]="loginData.password" mdInput placeholder="Password" type="password">
        </md-input-container>
        <button md-raised-button (click)="login()" color="primary">Login</button>
    </md-card>
    `
})

export class LoginComponent{

    constructor(private auth : AuthService){}

    loginData = {
        email:'',
        password:''
    }

    login(){
        this.auth.login(this.loginData);
    }
}