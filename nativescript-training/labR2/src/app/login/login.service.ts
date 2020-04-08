import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private isLoggedIn = false;
    private currentUser: string;
    private authToken: string;

    constructor(private http: HttpClient) { }

    login(username, password): Observable<string> {
        return this.http.put('https://lp-store.herokuapp.com/login', {username, password})
            .pipe(
                tap(data => {
                    this.currentUser = username;
                    this.isLoggedIn = true;
                    this.authToken = data['token'];
                    console.log("AUTH SUCCESSFUL");
                }),
                map(tokenObj => tokenObj['token'])
            );
    }

    isUserLoggedIn() {
        return this.isLoggedIn;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getAuthToken() {
        return this.authToken;
    }
}
