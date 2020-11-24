//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'user/list',
    component: ListComponent
  },
  {
    path: 'auser/:id',
    component: DetailComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);