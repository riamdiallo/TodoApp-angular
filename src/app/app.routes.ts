import { Component, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { TodoService } from './core/services/skip-tests.service';
import { Router } from '@angular/router';


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

   canActivate: [() => {
    const router = inject(Router);
    const todoService = inject(TodoService);

    if (todoService.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['login']); // ✅ redirection ici
      return false;
    }
  }],

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


