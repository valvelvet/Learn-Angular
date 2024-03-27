import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basics-pratice-recipe-list',
  templateUrl: './basics-pratice-recipe-list.component.html',
  styleUrl: './basics-pratice-recipe-list.component.scss',
})
export class BasicsPraticeRecipeListComponent {
  @Input() recipes = [];
  @Output() changeRecipe = new EventEmitter<{ id: number }>();

  toDetail(id: number) {
    this.changeRecipe.emit({ id: id });
  }
}
