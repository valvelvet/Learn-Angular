import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-basics-pratice-recipe-detail',
  templateUrl: './basics-pratice-recipe-detail.component.html',
  styleUrl: './basics-pratice-recipe-detail.component.scss',
})
export class BasicsPraticeRecipeDetailComponent {
  @Input() recipe: Recipe;
  @Output('changeRecipe') resetRecipe = new EventEmitter();

  backToList() {
    this.resetRecipe.emit();
  }
}
