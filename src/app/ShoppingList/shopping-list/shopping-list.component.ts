import { Ingredient } from './../../Shared/Ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrdients: Ingredient[] = [new Ingredient('apples',5),new Ingredient('tomatoes',10)];
  constructor() { }

  ngOnInit(): void {
  }

addToShoppingList(eventData: Ingredient)
{
  console.log(eventData);
  this.ingrdients.push(eventData);
}

}
