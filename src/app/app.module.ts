import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList-Edit/ShoppingList-Edit.component';
import { RecipeListComponent } from './Recipe-List/Recipe-List.component';
import { RecipeItemComponent } from './Recipe-Item/Recipe-Item.component';
import { RecipeDetailComponent } from './Recipe-detail/Recipe-detail.component';

@NgModule({
  declarations: [				
    AppComponent,
    ShoppingListComponent,
      ShoppingListEditComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipeDetailComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
