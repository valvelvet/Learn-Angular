import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionCardComponent } from './section-card/section-card.component';
import { BasicsComponent } from './basics/basics.component';
import { BasicsButtonComponent } from './basics/button/basics-button.component';
import { BasicsPraticeComponent } from './basics/pratice/basics-pratice.component';
import { BasicsPraticeHeaderComponent } from './basics/pratice/header/basics-pratice-header.component';
import { BasicsPraticeRecipeComponent } from './basics/pratice/recipe/basics-pratice-recipe.component';
import { BasicsPraticeRecipeListComponent } from './basics/pratice/recipe/list/basics-pratice-recipe-list.component';
import { BasicsPraticeRecipeDetailComponent } from './basics/pratice/recipe/detail/basics-pratice-recipe-detail.component';
import { BasicsPraticeShoppingComponent } from './basics/pratice/shopping/basics-pratice-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionCardComponent,
    BasicsComponent,
    BasicsButtonComponent,
    BasicsPraticeComponent,
    BasicsPraticeHeaderComponent,
    BasicsPraticeRecipeComponent,
    BasicsPraticeRecipeListComponent,
    BasicsPraticeRecipeDetailComponent,
    BasicsPraticeShoppingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
