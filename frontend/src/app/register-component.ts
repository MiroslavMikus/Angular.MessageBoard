import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth-service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register-component.html' ,
})

export class RegisterComponent  {
    
    form;

    constructor(private formBuilder : FormBuilder, private auth : AuthService){
        this.form = formBuilder.group({
            firstName: ['', Validators.required ],
            lastName:['', Validators.required ],
            email:['', [Validators.required, Validators.email] ],
            password:['', Validators.required ],
            confirmPassword:['', Validators.required ]
        }, { validator: matchingFileds('password','confirmPassword')})
    }

    onSubmit(){
        this.auth.register(this.form.value);
    }
}

function matchingFileds(field1, field2){
    return form =>{
        if(form.controls[field1].value != form.controls[field2].value)
        return { mismatchedFields: true};
    }
}