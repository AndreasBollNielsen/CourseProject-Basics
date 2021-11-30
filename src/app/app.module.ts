import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList-Edit/ShoppingList-Edit.component';
import { RecipeListComponent } from './Recipe-List/Recipe-List.component';
import { RecipeDetailComponent } from './Recipe/Recipe-detail/Recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './Recipe-List/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
      ShoppingListEditComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      HeaderComponent,
      RecipeItemComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
