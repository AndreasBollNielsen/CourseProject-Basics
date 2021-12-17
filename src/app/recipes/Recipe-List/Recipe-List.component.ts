import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from './RecipeService.service';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css'],
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [];
  constructor(private recipeservice: RecipeServiceService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }

  onNewRecipe(){
   this.router.navigate(['new'],{relativeTo: this.route});
  }

}
