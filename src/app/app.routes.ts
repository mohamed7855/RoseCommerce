import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
  },
];
