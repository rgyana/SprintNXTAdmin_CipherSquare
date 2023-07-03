import { AuthService } from './../../shared/services/auth.service';
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { map } from 'rxjs';

export const loginOtpGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isLoginOtpSent$.pipe(
        map(isApproved => {
            if (!isApproved) {
                router.navigate(['/auth/login']);
            }
            return isApproved;
        })
    );
};