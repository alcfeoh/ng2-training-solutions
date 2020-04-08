import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {LoginService} from "~/app/login/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private service: LoginService, private router: Router) {
    }

    canActivate(): boolean | UrlTree {
        console.log('AuthGuard#canActivate called');
        return this.service.isUserLoggedIn() || this.router.parseUrl('');
    }

}
