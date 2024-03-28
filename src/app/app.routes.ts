import { Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)
},
  { path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent),
    // canActivate: [authGuard],
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup.component').then((c) => c.SignupComponent),
  },
  { path: 'mo_hs_req',
    loadComponent: () => import('./mo-hs-req/mo-hs-req.component').then((c) => c.MoHsReqComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then ((c) => c. ContactComponent),
  },
   {
    path: 'hours',
    loadComponent: () => import('./hours/hours.component').then ((c) => c.HoursComponent),
   },
   {
    path: 'awards',
    loadComponent: () => import('./awards/awards.component').then ((c) => c.AwardsComponent),
   }
  // {
  //   path: 'student',
  //   loadComponent: () => import('./student').then((m) => m.StudentList),
  //   canActivate: [authGuard],
  // }
];
