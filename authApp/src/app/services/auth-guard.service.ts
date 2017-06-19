
import {Injectable} from "@angular/core";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";

//Loading services
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService:AuthService) {

    };

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            return false;
        }
    };
};
