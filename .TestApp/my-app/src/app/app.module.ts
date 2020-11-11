import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CooksComponent } from './cooks/cooks.component';
import { CooksCardComponent } from './cooks-card/cooks-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CooksComponent,
    CooksCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
