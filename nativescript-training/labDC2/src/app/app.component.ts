import { Component } from "@angular/core";
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "~/app/mock-data";
import {LicensePlate} from "~/app/license-plate";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ns-app",
    templateUrl: `app.component.html`
})
export class AppComponent {
    licensePlates: LicensePlate[] = LICENSE_PLATES;
    licensePlate: LicensePlate = CALIFORNIA_PLATE;

    value = "test";

    alertValue() {
        alert({message: this.value + ' was clicked'});
    }

}
