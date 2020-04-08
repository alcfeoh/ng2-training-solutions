import { Component } from '@angular/core';

@Component({
  selector: 'ns-hello',
  template:`
      <Button text="Hello {{name}}!"></Button>
  `
})
export class HelloComponent {

    name: string;

  constructor() {
      this.name = 'NativeScript';
  }
}
