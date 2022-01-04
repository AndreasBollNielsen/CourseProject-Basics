import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AppRoutingModule } from './app-routing-module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './Shared/dropdown.directive';
import { ShoppingListServiceService } from './ShoppingList/ShoppingListService.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
      ShoppingListEditComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      HeaderComponent,
      RecipeItemComponent,
      RecipesComponent,
      DropdownDirective,
      RecipeEditComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
