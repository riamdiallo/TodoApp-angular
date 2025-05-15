import { Component,inject } from '@angular/core';
import { ToolbarComponent } from '../shared/toolbar.component';
import { FormControl, ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../core/models/user.model';
import { TodoService } from '../../core/services/skip-tests.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToolbarComponent,ReactiveFormsModule,CommonModule,RouterModule],
  template: `
    <app-toolbar [isRegisterBtnShown]='true'></app-toolbar>

    <form class="form-container" [formGroup] ="registerForm" (ngSubmit)="onSubmit()">
      <h2 class="title"> Veuillez vous s'inscrire</h2>
       <h3 class="sub-title">
        Veuillez entrer votre mail et mot de passe <a routerLink="/login"> Se connecter</a>
       </h3> <br>

        <input type="email" placeholder="Email" formControlName="email">
         <input type="password" placeholder="Mot de passe" formControlName="password">

         <button class="register-btn"
            [ngClass]="{'active-btn': !registerForm.invalid}"
            [disabled] ="registerForm.invalid" type="submit">
            S'inscrire
        </button>
    </form>

  `,
  styles: ``
})
export default class RegisterComponent {

  private ts = inject (TodoService);
  private router = inject(Router);
  registerForm= new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required])
      });

     async onSubmit(){
       const user: User = {
       email : this.registerForm.value.email!,
       password : this.registerForm.value.password !

      };

      localStorage.setItem('email', user.email);
      await this.ts.newUser(user);
      this.router.navigateByUrl('/todo');

      console.log('user from db', user);
    }

}
