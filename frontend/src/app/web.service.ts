import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';


@Injectable()
export class WebService{
    
    constructor(private http : Http, private snackBar : MdSnackBar){
        this.getMessages('');
    }

    baseUrl = "http://localhost:19625/api";

    private messagesStore = [];
    
    private messageSubject = new Subject();

    public messages = this.messageSubject.asObservable();

    getMessages(user){

            user = (user) ? '/' + user : '';

            this.http.get(this.baseUrl + '/Messages' + user)
                    .subscribe(response =>{
                        this.messagesStore = response.json();
                        this.messageSubject.next(this.messagesStore);
                    }, error=> {
                        this.handleError("Unable to get messages");
                    });
    }

    postMessage(message){
            this.http.post(this.baseUrl + '/Messages', message)
                    .subscribe(response => {
                        this.messagesStore.push(response.json());   
                    }, error =>{
                        this.handleError("Unable to post message");
                    });
    }

    private handleError(error){
        this.snackBar.open(error,"close",{duration : 10000});
    }
}