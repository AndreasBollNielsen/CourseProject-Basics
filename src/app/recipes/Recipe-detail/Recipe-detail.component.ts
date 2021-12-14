import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../Recipe-List/RecipeService.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-Recipe-detail',
  templateUrl: './Recipe-detail.component.html',
  styleUrls: ['./Recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private myRecipeService: RecipeServiceService) {}

  ngOnInit() {}

  AddToShoppingList() {
    this.myRecipeService.AddIngredientsToList(this.recipe.ingredients);
  }
}
