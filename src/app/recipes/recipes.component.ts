import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './Recipe-List/RecipeService.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService]
})
export class RecipesComponent implements OnInit {

  selctedRecipe: Recipe;
  constructor(private myRecipeService: RecipeServiceService) { }

  //subscripe to event handling recipe selection
  ngOnInit(): void
  {
    this.myRecipeService.recipeSelected
    .subscribe((recipe: Recipe)=>{this.selctedRecipe = recipe});
  }

}
