import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { AddTodoComponent } from './add-todo.component';
import { AddTodoListComponent } from "./add-todoList.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ToolbarComponent, AddTodoComponent, AddTodoListComponent],
  template: `
    <div class="todo-container">

      <app-toolbar [isLogoutBtnshown]="true"></app-toolbar>
      <app-add-todo></app-add-todo>
      <app-add-todoList></app-add-todoList>
    </div>
  `,
  styles: [`

  `]
})
export default class TodoComponent {}

