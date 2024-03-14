import { Component } from '@angular/core';

@Component({
  /** selector：創建的組件名，引用方式參照CSS命名的方式引用（id、偽類等等的都無效） */
  selector: 'app-header', // <app-header></app-header>
  // selector: '[app-header]', // <div app-header></div>
  // selector: '.app-header', // <div class="app-header"></div>

  /** template、templateUrl：模板，二選一必填 */
  // template: '<app-button></app-button><app-button></app-button>',
  templateUrl: './header.component.html',

  /** styles、styleUrl、styleUrls：樣式引用文件，非必填 */
  // styles: [
  //   `
  //     ul {
  //       color: #0af;
  //     }
  //   `,
  // ],
  // styleUrl: './header.component.scss',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
