import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ToolbarComponent],
  template: `
    <app-toolbar [isLogoutBtnshown]='true'></app-toolbar>
  `,
  styles: ``
})
export default class TodoComponent {

}
