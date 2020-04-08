import { Component, OnInit } from '@angular/core';
import {LoginService} from "~/app/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private service: LoginService, private router: Router) { }

    login(username, password) {
      console.log('LOGIN', username, password);
      this.service.login(username, password).subscribe(done => this.router.navigateByUrl('checkout') )
    }

}
