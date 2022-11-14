import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
