import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList/ShoppingList-Edit/ShoppingList-Edit.component';
import { RecipeListComponent } from './recipes/Recipe-List/Recipe-List.component';
import { RecipeDetailComponent } from './recipes/Recipe-detail/Recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes/Recipe-List/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
      ShoppingListEditComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      HeaderComponent,
      RecipeItemComponent,
      RecipesComponent
   ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
