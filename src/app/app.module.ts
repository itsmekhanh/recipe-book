import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { FormsModule } from '@angular/forms';
import { ListOfRecipiesComponent } from './list-of-recipies/list-of-recipies.component';
import { OneOfRecipeComponent } from './one-of-recipe/one-of-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfRecipiesComponent,
    OneOfRecipeComponent,
    RecipeComponent
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
