import { Recipe } from './../recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppingListServiceService } from 'src/app/ShoppingList/ShoppingListService.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {


  recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'Tasty lasagna made from people',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/585px-Lasagne_-_stonesoup.jpg',
      [
        new Ingredient('minced meat', 1),
        new Ingredient('cheese', 10),
        new Ingredient('mornay sauce', 2),
      ]
    ),
    new Recipe(
      'Tomato Sauce',
      'a nice little tomato sauce',
      'https://www.cookingclassy.com/wp-content/uploads/2020/10/tomato-soup-7-600x900.jpg',
      [
        new Ingredient('tomato ', 20),
        new Ingredient('water', 10),
        new Ingredient('chreme fraise', 1),
      ]
    ),
  ];

  constructor(private myShoppingService: ShoppingListServiceService) {}

  //return copy of array
  getRecipes() {
    return this.recipes.slice();
  }
  AddIngredientsToList(ingredients: Ingredient[]) {
    this.myShoppingService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
}
