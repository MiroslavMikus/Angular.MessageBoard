import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register-component.html' ,
})

export class RegisterComponent  {
    form;

    constructor(private formBuilder : FormBuilder){
        this.form = formBuilder.group({
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }

    onSubmit(){
        console.log(this.form.value)
    }
}
