import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './Recipe-List/RecipeService.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  //subscripe to event handling recipe selection
  ngOnInit(): void{}

}
