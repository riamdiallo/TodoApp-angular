import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <nav class="toolbar">
      <a  class="app-todo" routerLink='/'>TodoAdam</a>
      <button class="toolbar-btn" routerLink="/register" *ngIf='isLoginBtnShown'> S'incrire</button>
      <button class="toolbar-btn" routerLink="/login" *ngIf="isRegisterBtnShown">Se connecter</button>
      <button class="toolbar-btn" routerLink="/login" *ngIf="isLogoutBtnshown">Se déconnecter</button>
    </nav>
  `,
  styles: `
      .toolbar{
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        border-bottom:0.1px #2828281a solid;
        position: sticky;
        top:0;

      }

      .app-todo {
        text-decoration: none;
        color: inherit;
        font-size: 1.4rem;
        font-weight:bold;
      }
      .toolbar-btn{
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background: #252525;
        color: white;
        font-size: 1.1em;
        transition: transform 250ms;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
  `
})
export class ToolbarComponent {

  @Input() isLoginBtnShown!:boolean;
  @Input () isRegisterBtnShown!: boolean;
  @Input() isLogoutBtnshown!: boolean;

}
