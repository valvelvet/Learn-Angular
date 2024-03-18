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
  inputVal = 'Text';
  praticeInputVal = '';
  theIfVal = true;
  btnType: string = 'red';
  theForArr: number[] = [0, 1, 2, 3, 4];
  praticeArr: { isFinish: boolean; content: string }[] = [
    { isFinish: false, content: '4/4(四),4/5(五)放清明兒童節' },
    { isFinish: false, content: '5/1(三)放假' },
    { isFinish: false, content: '6/10(一)放端午節' },
    { isFinish: false, content: '9/17(二)放中秋節' },
    { isFinish: false, content: '10/10(四)放雙十' },
  ];

  constructor() {
    setTimeout(() => (this.inputVal += '.'), 1000);
    setTimeout(() => (this.inputVal += '.'), 2000);
    setTimeout(() => (this.inputVal += '.'), 3000);
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

  addItemForArr() {
    this.theForArr.pop();
    this.theForArr.unshift(Math.floor(Math.random() * 10));
  }

  hasFinished() {
    return this.praticeArr.find((i) => i.isFinish);
  }

  removePraticeArrItem() {
    this.praticeArr = this.praticeArr.filter((i) => !i.isFinish);
  }
}
