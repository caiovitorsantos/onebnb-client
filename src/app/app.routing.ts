import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
 
import { HomeComponent } from './home/home.component';
 
 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];
 
// Exporte a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);