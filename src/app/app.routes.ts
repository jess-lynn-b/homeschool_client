import { Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
  },
  { path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent),
    // canActivate: [authGuard],
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup.component').then((m) => m.SignupComponent),
  },
  { path: 'mo_hs_req',
    loadComponent: () => import('./mo-hs-req/mo-hs-req.component').then((c) => c.MoHsReqComponent),
  },
  // {
  //   path: 'student',
  //   loadComponent: () => import('./student').then((m) => m.StudentList),
  //   canActivate: [authGuard],
  // }
];
