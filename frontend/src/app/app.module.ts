import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';

import { MessageComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { NavComponent } from './nav-component';
import { WebService } from './web.service';
import { HomeComponent } from './home-component';

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
}];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent, NavComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})

export class AppModule { }
