import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {LoginComponent} from "~/app/login/login.component";
import {CheckoutViewComponent} from "~/app/checkout-view/checkout-view.component";
import {AuthGuard} from "~/app/login/auth-guard.service";


const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "checkout", component: CheckoutViewComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
