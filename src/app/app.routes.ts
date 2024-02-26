import { Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    // canActivate: [authGuard],
  },
  // {
  //   path: 'student',
  //   loadComponent: () => import('./student').then((m) => m.StudentList),
  //   canActivate: [authGuard],
  // }
];
