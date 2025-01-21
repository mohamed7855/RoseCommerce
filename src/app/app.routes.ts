import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
  },
  {path: 'about', title: 'About Us', loadComponent: () => import('./core/pages/about/about.component').then(m => m.AboutComponent)},
  {path: 'location', title: 'About Us', loadComponent: () => import('./core/pages/location/location.component').then(m => m.LocationComponent)},
  {path: 'contact', title: 'Contact Us', loadComponent: () => import('./core/pages/contact/contact.component').then(m => m.ContactComponent)},
  {path: 'delivery', title: 'Delivery', loadComponent: () => import('./core/pages/delivery/delivery.component').then(m => m.DeliveryComponent)},
  {path: 'policy', title: 'Policy', loadComponent: () => import('./core/pages/policy/policy.component').then(m => m.PolicyComponent)},
  {path: 'faqs', title: 'FAQS', loadComponent: () => import('./core/pages/faqs/faqs.component').then(m => m.FaqsComponent)}
];
