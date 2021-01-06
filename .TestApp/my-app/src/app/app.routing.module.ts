import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooksComponent } from './cooks/cooks.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: '', component: CooksComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create', component: CreateComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'details/:id/edit', component: EditComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ]

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}