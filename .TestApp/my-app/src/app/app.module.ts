import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CooksComponent } from './cooks/cooks.component';
import { CooksCardComponent } from './cooks-card/cooks-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { CooksListComponent } from './cooks-list/cooks-list.component';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  {path: '', component: CooksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details/:id', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CooksComponent,
    CooksCardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    CreateComponent,
    CooksListComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
