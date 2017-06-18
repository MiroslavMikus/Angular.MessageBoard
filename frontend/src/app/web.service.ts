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

    getMessages(user){

            user = (user) ? '/' + user : '';

            this.http.get(this.baseUrl + '/Messages' + user)
                    .subscribe(response =>{
                        this.messages = response.json();
                    }, error=> {
                        this.handleError("Unable to get messages");
                    });
    }

    postMessage(message){
            this.http.post(this.baseUrl + '/Messages', message)
                    .subscribe(response => {
                        this.messages.push(response.json());   
                    }, error =>{
                        this.handleError("Unable to post message");
                    });
    }

    private handleError(error){
        this.snackBar.open(error,"close",{duration : 10000});
    }
}