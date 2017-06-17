import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './messages-component';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { WebService } from './web.service';
import { HttpModule }    from '@angular/http';


@NgModule({
  imports:      [ BrowserModule, MaterialModule,HttpModule],
  declarations: [ AppComponent, MessageComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})

export class AppModule { }
