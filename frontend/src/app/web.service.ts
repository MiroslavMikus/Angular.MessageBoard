import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService{
    
    constructor(private http : Http){
        this.getMessages();
    }

    baseUrl = "http://localhost:19625/api";

    messages = [];

    async getMessages(){
        var response = await this.http.get(this.baseUrl + '/messages').toPromise();
        this.messages = response.json();
    }

    async postMessage(message){
        var response = await this.http.post(this.baseUrl + '/messages', message).toPromise();
        this.messages.push(response.json());
    }
}