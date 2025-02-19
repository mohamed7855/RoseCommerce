import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./feature/pages/home/home.component').then((c) => c.HomeComponent),
    
    
  },
  {
    path:'auth',
    loadComponent : () =>import('./core/pages/auth/auth.component').then((c) => c.AuthComponent),
    children :[
      {
        path:'signup',
        loadComponent :() => import('./core/pages/register/register.component').then(p => p.RegisterComponent),
        title :'Sign Up'
      },
      {
        path:'login',
          loadComponent :() => import('./core/pages/login/login.component').then(p => p.LoginComponent),
          title :'Login'

      },
      {
        path:'forget-password',
        loadComponent :()=> import('./core/pages/forget-password/forget-password.component').then( p => p.ForgetPasswordComponent),
        title:'Forget Password'
      }
    ]
  },
  {path: 'about', title: 'About Us', loadComponent: () => import('./feature/pages/about/about.component').then(c => c.AboutComponent)},
  {path: 'location', title: 'About Us', loadComponent: () => import('./feature/pages/location/location.component').then(c => c.LocationComponent)},
  {path: 'contact', title: 'Contact Us', loadComponent: () => import('./feature/pages/contact/contact.component').then(c => c.ContactComponent)},
  {path: 'delivery', title: 'Delivery', loadComponent: () => import('./feature/pages/delivery/delivery.component').then(c => c.DeliveryComponent)},
  {path: 'policy', title: 'Policy', loadComponent: () => import('./feature/pages/policy/policy.component').then(c => c.PolicyComponent)},
  {path: 'faqs', title: 'FAQS', loadComponent: () => import('./feature/pages/faqs/faqs.component').then(c => c.FaqsComponent)},
  {path: 'details', title: 'FAQS', loadComponent: () => import('./feature/pages/details/details.component').then(c => c.DetailsComponent)}
];
