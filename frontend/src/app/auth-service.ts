import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    baseUrl = "http://localhost:19625/auth";

    name_key = 'name';
    token_key = 'token';

    constructor(private http : Http, private router : Router){}

    get name (){
        return localStorage.getItem(this.name_key);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.token_key);
    }

    login(loginData){
        this.http.post(this.baseUrl + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }

    register(user){
        delete user.confirmPassword;
        this.http.post(this.baseUrl + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }

    logout(){
        localStorage.removeItem(this.name_key);
        localStorage.removeItem(this.token_key);
    }

    authenticate(res){
        var authResponse = res.json();

        if (!authResponse.token)
            return;

        localStorage.setItem(this.token_key, res.json().token);
        localStorage.setItem(this.name_key, res.json().firstName);
        this.router.navigate(['/']);
    }
}