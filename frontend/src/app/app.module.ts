import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './messages-component';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ BrowserModule, MaterialModule],
  declarations: [ AppComponent, MessageComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
