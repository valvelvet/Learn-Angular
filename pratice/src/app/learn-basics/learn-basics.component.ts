import { Component } from '@angular/core';

@Component({
  /** selector：創建的組件名，引用方式參照CSS命名的方式引用（id、偽類等等的都無效） */
  selector: 'app-learn-basics', // <app-learn-basics></app-learn-basics>
  // selector: '[app-learn-basics]', // <div app-learn-basics></div>
  // selector: '.app-learn-basics', // <div class="app-learn-basics"></div>

  /** template、templateUrl：模板，二選一必填 */
  // template: '<app-button></app-button><app-button></app-button>',
  templateUrl: './learn-basics.component.html',

  /** styles、styleUrl、styleUrls：樣式引用文件，非必填 */
  // styles: [
  //   `
  //     ul {
  //       color: #0af;
  //     }
  //   `,
  // ],
  // styleUrl: './learn-basics.component.scss',
  styleUrls: ['./learn-basics.component.scss'],
})
export class LearnBasicsComponent {
  btnType: string = 'red';
  inputVal = 'Text';
  praticeInputVal = '';

  constructor() {
    setTimeout(() => (this.btnType = 'blue'), 2000);
  }

  getInputVal() {
    return this.inputVal;
  }

  updateInputVal(event: Event) {
    this.inputVal = (<HTMLInputElement>event.target).value;
  }

  btnClick(_btnType: string = '') {
    switch (this.btnType) {
      case 'red':
        this.btnType = 'blue';
        break;
      case 'blue':
        this.btnType = 'orange';
        break;
      case 'orange':
        this.btnType = 'red';
        break;
      default:
        this.btnType = _btnType;
        break;
    }
  }
}
