import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-Recipe-detail',
  templateUrl: './Recipe-detail.component.html',
  styleUrls: ['./Recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
