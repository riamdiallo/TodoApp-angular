import { Component } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormControl, ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToolbarComponent,ReactiveFormsModule,CommonModule,RouterModule],
  template: `
    <app-toolbar [isRegisterBtnShown]='true'></app-toolbar>

    <form class="form-container" [formGroup] ="registerForm">
      <h2 class="title"> Veuillez vous s'inscrire</h2>
       <h3 class="sub-title">
        Veuillez votre nom et une adresse mail<a routerLink="/login"> Se connecter</a>
       </h3> <br>
         <input type="text" placeholder="Nom complet" formControlName="fullname">
        <input type="email" placeholder="Email" formControlName="email">

         <button class="register-btn"
            [ngClass]="{'active-btn': !registerForm.invalid}"
            [disabled] ="registerForm.invalid" click="onSubmit()">
            S'inscrire
        </button>
    </form>

  `,
  styles: ``
})
export default class RegisterComponent {

  registerForm= new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        fullname: new FormControl('',[Validators.required])
      });

      onSubmit(){}

}
