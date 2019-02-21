import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfRecipiesComponent } from './list-of-recipies/list-of-recipies.component';
import { OneOfRecipeComponent } from './one-of-recipe/one-of-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfRecipiesComponent,
    OneOfRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
