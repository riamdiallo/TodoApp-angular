import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../core/services/skip-tests.service';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

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
        <input type="password" placeholder="Mot de passe" formControlName="password">
        <p *ngIf="showError">{{errorMsg}}</p>
         <button class="auth-btn"
            [ngClass]="{'active-btn': !loginForm.invalid}"
            [disabled] ="loginForm.invalid" (click)="onSubmit()">
            Connexion
        </button>
    </form>
  `,
  styles: `
   p {
     color: red;
   }
  `
})
export default class LoginComponent {
   private ts = inject (TodoService);
   private router = inject(Router);
    showError = false;
    errorMsg= " Cet email n'existe pas, veuillez vous inscrire"
    loginForm= new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });



      async onSubmit(){
       const email = this.loginForm.value.email!;
       const password = this.loginForm.value.password!;
       const user =  await this.ts.logIn(email)

       if(user ?.email === email && user.password === password) {
        localStorage.setItem('email', email)
        this.router.navigateByUrl('/todo');
       }
       else {
         this.showError = true
       }
      }

}
