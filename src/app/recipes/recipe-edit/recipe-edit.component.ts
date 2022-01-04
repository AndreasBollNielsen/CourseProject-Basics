import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServiceService } from '../Recipe-List/RecipeService.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private RecipeService: RecipeServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit()
  {
    console.log(this.recipeForm);
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    if (this.editMode) {
      const recipe = this.RecipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagepath': new FormControl(imagePath),
      'decription': new FormControl(description)
    });
  }
}
