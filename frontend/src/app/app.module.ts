import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';

import { MessageComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { NavComponent } from './nav-component';
import { HomeComponent } from './home-component';
import { RegisterComponent } from './register-component';
import { LoginComponent } from './login-component';

import { WebService } from './web.service';
import { AuthService } from './auth-service';

var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessageComponent
},
{
  path: 'messages/:name',
  component: MessageComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService, AuthService ]
})

export class AppModule { }
