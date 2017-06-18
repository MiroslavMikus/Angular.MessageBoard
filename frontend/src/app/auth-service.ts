import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class AuthService{
    baseUrl = "http://localhost:19625/auth";

    constructor(private http : Http){

    }

    register(user){
        delete user.confirmPassword;
        this.http.post(this.baseUrl + '/register', user).subscribe();
    }
}