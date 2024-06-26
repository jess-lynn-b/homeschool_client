import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { of } from 'rxjs';
import { authInterceptor } from './core/interceptors/auth.interceptor/auth.interceptor.component';

// export function intializeUserData(userService:UserService, authService:AuthenticationService) {
//   if (authService.isLoggedIn()){
//     return() =>userService.().subscribe();
//   } else {
//     return () => of(null);
//   }
// }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: intializeUserData,
    //   deps: [UserService, AuthenticationService],
    //   multi: true
    // },
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
