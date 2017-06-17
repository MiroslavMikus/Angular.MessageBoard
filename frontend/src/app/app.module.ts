import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { NavComponent } from './nav-component';
import { WebService } from './web.service';


@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, FormsModule, BrowserAnimationsModule],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent, NavComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})

export class AppModule { }
