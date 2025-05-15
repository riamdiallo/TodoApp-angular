import { Inject, Injectable } from '@angular/core';
import { AngularTodoDB } from './db';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 db = new AngularTodoDB();
 private router = Inject(Router);
  logIn = (email: string) => this.db.users.get(email)
  newUser = (user: User) => this.db.users.add(user);


   isLoggedIn = () => !!localStorage.getItem('email');


}
