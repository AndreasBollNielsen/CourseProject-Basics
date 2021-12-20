import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeServiceService } from '../Recipe-List/RecipeService.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-Recipe-detail',
  templateUrl: './Recipe-detail.component.html',
  styleUrls: ['./Recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private myRecipeService: RecipeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.myRecipeService.getRecipe(this.id);
    });
  }

  AddToShoppingList() {
    this.myRecipeService.AddIngredientsToList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
