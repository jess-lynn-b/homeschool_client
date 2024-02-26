// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthenticationService } from './services/authentication.service';

// export const noAuthGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthenticationService);
//   const router = inject(Router);

//   if (authService.isLoggedIn()){
//     router.navigate(['/student']);
//     return false;
//   } else {
//     return true;
//   }
// };
