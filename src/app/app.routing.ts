import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { Angular2TokenService }  from 'angular2-token';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ResultsComponent } from './results/results.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component'; 
import { NotFoundComponent } from './not-found/not-found.component'; 
 
// Create our routes
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService] },
  { path: 'results', component: ResultsComponent },
  { path: 'property/:id', component: PropertyDetailsComponent },
  { path: '404', component: NotFoundComponent },
 	{path: '**', redirectTo: '/not-found.html'}
];
 
// Export the constant routing to import them in app.module.ts file
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);