import { CommonModule } from '@angular/common';
import { Component,Input,inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoService } from '../../core/services/skip-tests.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <nav class="toolbar">
      <a  class="app-todo" routerLink='/'>TodoAdam</a>
        <button class="toolbar-btn"
                  routerLink="/register" *ngIf='isLoginBtnShown'>
                   S'incrire
        </button>
        <button class="toolbar-btn"
                  routerLink="/login" *ngIf="isRegisterBtnShown">
                  Se connecter
        </button>
       <div class="avatar-logout-btn" *ngIf="isLogoutBtnshown">
          <div class="user-avatar">
             {{firstEmailLetter![0]}}
          </div>
          <button class="toolbar-btn"
              routerLink="/login"
               (click) ="logOut()">
              Se déconnecter
          </button>
       </div>

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
       .avatar-logout-btn {
          display: flex;
          align-items: center;

          & > * {
            margin-right:1rem; // ← espace entre les éléments
          }
       }

      .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;            // Forme ronde
      display: flex;                 // Centre le contenu à l’intérieur
      justify-content: center;
      align-items: center;
      background: lightpink;         // Couleur de fond
      font-size: 1.3em;              // Taille du texte (initiales par ex)
      font-weight: bolder;          // Texte en gras
   }



  `
})
export class ToolbarComponent {

  @Input() isLoginBtnShown!:boolean;
  @Input () isRegisterBtnShown!: boolean;
  @Input() isLogoutBtnshown!: boolean;



  // Référence à la fonction getUsers()  pour récupérer les utilisateurs plus tard déclaré dans le TodoService


    firstEmailLetter = localStorage.getItem('email')


  // fonction de deconnexion de l'utilisateur
   logOut  = () => localStorage.removeItem('email');
}
