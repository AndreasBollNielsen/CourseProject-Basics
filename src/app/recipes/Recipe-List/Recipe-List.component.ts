import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from './RecipeService.service';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css'],
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [];
  constructor(private recipeservice: RecipeServiceService) {}

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }


}
