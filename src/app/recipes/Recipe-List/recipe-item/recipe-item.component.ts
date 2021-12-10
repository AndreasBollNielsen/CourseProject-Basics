import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {

  @Input() model:Recipe
  @Output() detailClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected()
  {
    this.detailClick.emit();
    console.log("i clicked on a link");
  }
}
