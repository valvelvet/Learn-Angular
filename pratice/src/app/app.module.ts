import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { LearnBasicsComponent } from './learn-basics/learn-basics.component';
import { SectionCardComponent } from './section-card/section-card.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, LearnBasicsComponent, SectionCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
