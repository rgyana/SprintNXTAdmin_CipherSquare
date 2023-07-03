import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const authService = inject(AuthService);
    const router = inject(Router);

    const isAuthenticated: boolean = authService.getAuthStatus();

    if (!isAuthenticated) {
        router.navigate(['/auth/login']);
    }
    return isAuthenticated;
}