import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-Recipe-List',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('test recipe','this is a test','https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg')
  ,new Recipe('test recipe','this is a test','https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
