import { Component } from '@angular/core';
import {CartService} from "~/app/cart.service";
import {Observable} from "rxjs";
import {LicensePlate} from "~/app/license-plate";

@Component({
  selector: 'ns-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

    licensePlates$: Observable<LicensePlate[]>;

      constructor(public cartService: CartService) {
          this.licensePlates$ = cartService.getCartContents();
      }
}
