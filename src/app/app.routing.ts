import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { Angular2TokenService }  from 'angular2-token';
 
 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService] }
];
 
// Exporte a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);