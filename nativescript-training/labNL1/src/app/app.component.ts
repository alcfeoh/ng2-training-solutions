import { Component } from "@angular/core";
import {LicensePlate} from "~/app/license-plate";
import { alert } from "tns-core-modules/ui/dialogs";
import {LicensePlateService} from "~/app/license-plate.service";
import {Observable} from "rxjs";
import {CartService} from "~/app/cart.service";

@Component({
    selector: "ns-app",
    templateUrl: `app.component.html`
})
export class AppComponent {
    licensePlates$: Observable<LicensePlate[]>;
    cartContents$: Observable<LicensePlate[]>;

    constructor(private service: LicensePlateService, public cartService: CartService) {
        this.licensePlates$ = service.getList();
        this.cartContents$ = cartService.getCartContents();
    }

    addToCart(plate: LicensePlate) {
        this.cartService.addToCart(plate);
        alert( {message: "Plate added to cart", okButtonText: "OK"});
    }
}
