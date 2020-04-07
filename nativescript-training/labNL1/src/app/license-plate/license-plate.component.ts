import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {LicensePlate} from "~/app/license-plate";


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

    @Output()
    buttonClick = new EventEmitter<LicensePlate>();

    constructor() { }

    buttonClicked() {
        this.buttonClick.emit(this.plate);
    }
}
