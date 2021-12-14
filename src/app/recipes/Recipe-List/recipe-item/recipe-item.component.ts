import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServiceService } from '../RecipeService.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() model: Recipe;

  constructor(private myRecipeService: RecipeServiceService) {}

  ngOnInit(): void {}

  //use Service to emit event when clicking on recipe
  onRecipeSelected() {
    this.myRecipeService.recipeSelected.emit(this.model);
  }
}
