import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './messages-component';
import { NewMessageComponent } from './new-message-component';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { WebService } from './web.service';
import { HttpModule }    from '@angular/http';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, FormsModule, BrowserAnimationsModule],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})

export class AppModule { }
