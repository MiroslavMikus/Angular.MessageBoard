import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MdSnackBar} from '@angular/material';


@Injectable()
export class WebService{
    
    constructor(private http : Http, private snackBar : MdSnackBar){
        this.getMessages('');
    }

    baseUrl = "http://localhost:19625/api";

    messages = [];

    async getMessages(user){
        try {
            user = (user) ? '/' + user : '';

            var response = await this.http.get(this.baseUrl + '/Messages' + user).toPromise();

            this.messages = response.json();

        } catch (error) {
            this.handleError("Unable to get messages");
        } 
    }

    async postMessage(message){
        try {
                var response = await this.http.post(this.baseUrl + '/Messages', message).toPromise();

                this.messages.push(response.json());   
                         
        } catch (error) {
            this.handleError("Unable to post message");
        }
    }

    private handleError(error){
        this.snackBar.open(error,"close",{duration : 10000});
    }
}