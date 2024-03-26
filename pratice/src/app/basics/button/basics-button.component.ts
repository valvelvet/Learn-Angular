import { Component, Input } from '@angular/core';

@Component({
  /** selector：創建的組件名，引用方式參照CSS命名的方式引用（id、偽類等等的都無效） */
  selector: 'app-basics-button', // <app-basics-button></app-basics-button>
  // selector: '[app-basics-button]', // <div app-basics-button></div>
  // selector: '.app-basics-button', // <div class="app-basics-button"></div>
  templateUrl: './basics-button.component.html',
  styleUrl: './basics-button.component.scss',
})
export class BasicsButtonComponent {
  @Input()
  type: string = '';
  @Input()
  disabled: boolean = false;
}
