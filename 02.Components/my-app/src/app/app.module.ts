import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { TestComponent } from './test/test.component';
import { apiURLProvider } from './providers'

@NgModule({
  declarations: [  //слагаме нещата, които можем да ползваме в темплейтите на компонентите 
    AppComponent, 
    NameInputComponent, 
    TestComponent
  ],
  imports: [
    BrowserModule,  //функционалности за браузъра; напр. за мобилна версия се подава друг модул
    HttpClientModule
  ],
  providers: [
    apiURLProvider
  ],  //тук се слагат сървиси
  bootstrap: [AppComponent]
})
export class AppModule { }                                                                                                                                                                   