import {Component, Input} from "@angular/core";
import {LicensePlate} from "~/app/license-plate";
import { alert } from "tns-core-modules/ui/dialogs";


@Component({
    selector: "ns-license-plate",
    templateUrl: "./license-plate.component.html",
    styleUrls: ["license-plate.component.css"]
})
export class LicensePlateComponent {

    @Input()
    plate: LicensePlate;

    @Input()
    buttonText: string;

    constructor() { }

    buttonClicked() {
        alert( {message: "Plate added to cart", okButtonText: "OK"});
    }
}
