import { Inject, Injectable } from '@angular/core';
import { AngularTodoDB } from './db';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { liveQuery } from 'dexie';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
 db = new AngularTodoDB();
 private router = Inject(Router);
  logIn = (email: string) => this.db.users.get(email);
  newUser = (user: User) => this.db.users.add(user);
   getUsers  = () => this.db.users.toArray();

   isLoggedIn = () => !!localStorage.getItem('email');


   newTodo = (todo:Todo) => this.db.todos.add(todo);

   getTodos = () => liveQuery(() => this.db.todos.toArray());

   updateTodo = (todo: Todo) => this.db.todos.update(todo.id!, todo);
   deleteTodo = (todo: Todo) => this.db.todos.delete(todo.id!);

}
