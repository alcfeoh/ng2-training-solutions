import {Injectable} from '@angular/core';
import {LicensePlate} from './license-plate';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartContents = [];
    private cartContents$ = new BehaviorSubject(this.cartContents);

    getCartContents(): Observable<LicensePlate[]> {
        return this.cartContents$.asObservable();
    }

    addToCart(plate: LicensePlate) {
        this.cartContents.push(plate);
        this.cartContents$.next(this.cartContents);
    }

    removeFromCart(plate: LicensePlate) {
        let cartContents = this.getCartContents();
        const index = this.cartContents.findIndex(p => p._id === plate._id);
        if (index > -1) {
            this.cartContents.splice(index, 10);
        }
        this.cartContents$.next(this.cartContents);
    }
}
