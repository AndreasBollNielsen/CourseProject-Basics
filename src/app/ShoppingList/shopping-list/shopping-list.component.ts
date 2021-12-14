import { Ingredient } from './../../Shared/Ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../ShoppingListService.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrdients: Ingredient[] = [];
  constructor(private myShoppingService: ShoppingListServiceService) {}

  ngOnInit(): void {
    this.ingrdients = this.myShoppingService.GetIngredients();
    this.myShoppingService.changeIngredients
    .subscribe((ingredients: Ingredient[])=>{this.ingrdients = ingredients});
  }
}
