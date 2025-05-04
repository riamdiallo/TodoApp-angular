import { Component } from '@angular/core';
import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'login',
    title: 'login | TodoApp',
    loadComponent : () => import ('./components/auth/login.component')
  },

  {
    path: 'register',
    title: 'register | TodoApp',
    loadComponent : () => import ('./components/auth/register.component')
  },

  {
    path: 'todo',
    title: 'todo | TodoApp',
    loadComponent : () => import ('./components/todo/todo.component')
  },

  {
    path:'',
    redirectTo: 'todo',
    pathMatch: 'prefix'
  },

  {
    path:'**',
    redirectTo: 'todo',
    pathMatch: 'prefix'
  }

];


