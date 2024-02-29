import { Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  { path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    // canActivate: [authGuard],
  },
  { path: 'mo_hs_req',
    loadComponent: () => import('./mo-hs-req/mo-hs-req.component').then((m) => m.MoHsReqComponent),
  },
  // {
  //   path: 'student',
  //   loadComponent: () => import('./student').then((m) => m.StudentList),
  //   canActivate: [authGuard],
  // }
];
