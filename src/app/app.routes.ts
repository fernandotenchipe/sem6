import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LiteralArray } from '@angular/compiler';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotFoundComponent}, // redirecciona a home si no encuentra la ruta
];
