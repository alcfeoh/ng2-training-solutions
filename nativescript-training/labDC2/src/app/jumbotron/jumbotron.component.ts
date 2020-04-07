import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

    @Input()
    title: string;
    @Input()
    description: string;
}
