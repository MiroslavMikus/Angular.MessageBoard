import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService{
    
    constructor(private http : Http){}

    baseUrl = "http://localhost:19625/api";

     getMessages(){
        return this.http.get(this.baseUrl + '/messages').toPromise();
    }

    postMessage(message){
        return this.http.post(this.baseUrl + '/messages', message).toPromise();
    }
}