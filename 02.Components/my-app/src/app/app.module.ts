import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';

@NgModule({
  declarations: [  //слагаме нещата, които можем да ползваме в темплейтите на компонентите 
    AppComponent, NameInputComponent
  ],
  imports: [
    BrowserModule  //функционалности за браузъра; напр. за мобилна версия се подава друг модул
  ],
  providers: [],  //тук се слагат сървиси
  bootstrap: [AppComponent]
})
export class AppModule { }
                                                                                                                                                                                              