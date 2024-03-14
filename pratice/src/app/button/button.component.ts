import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  title: string = '首頁';
  type: string = 'red';

  constructor() {
    setTimeout(() => (this.type = 'blue'), 2000);
  }

  getTitle() {
    return this.title;
  }

  setType(_type: string) {
    this.type = _type;
  }
}
