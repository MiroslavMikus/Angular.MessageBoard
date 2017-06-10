import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './messages-component';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { WebService } from './web.service';


@NgModule({
  imports:      [ BrowserModule, MaterialModule],
  declarations: [ AppComponent, MessageComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})

export class AppModule { }
