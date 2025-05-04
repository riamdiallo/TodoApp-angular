import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ToolbarComponent,ReactiveFormsModule,RouterModule,CommonModule],
  template: `
    <app-toolbar [isLoginBtnShown]='true'></app-toolbar>

    <form class="form-container" [formGroup] ="loginForm">
      <h2 class="title"> Conncetez-vous</h2>
       <h3 class="sub-title">
        Veuillez entrer votre email <a routerLink="/register"> S'inscrire</a>
       </h3> <br>
        <input type="email" placeholder="Email" formControlName="email">
        <p *ngIf="showError">{{errorMsg}}</p>
         <button class="auth-btn"
            [ngClass]="{'active-btn': !loginForm.invalid}"
            [disabled] ="loginForm.invalid" click="onSubmit()">
            Connexion
        </button>
    </form>
  `,
  styles: `
  `
})
export default class LoginComponent {
    showError = false;
    errorMsg= " Cet email n'existe pas, veuillez vous inscrire"
    loginForm= new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
    });

    onSubmit(){}

}
