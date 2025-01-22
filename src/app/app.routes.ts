import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
  },
  { path: 'category', title: 'Category', loadComponent: () => import('./core/pages/category/category.component').then((c) => c.CategoryComponent) },
  { path: 'about', title: 'About Us', loadComponent: () => import('./core/pages/about/about.component').then((c) => c.AboutComponent) },
  { path: 'contact', title: 'Contact Us', loadComponent: () => import('./core/pages/contact/contact.component').then((c) => c.ContactComponent) },
];
