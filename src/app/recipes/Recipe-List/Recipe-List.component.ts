import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeIsSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Apple juice recipe',
      'fresh apple juice from the kitchen',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'
    ),
    new Recipe(
      'Tomato Sauce recipe',
      'a nice little tomato sauce',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeIsSelected.emit(recipe);
    console.log("sending data from recipe list: " +recipe);
  }
}
