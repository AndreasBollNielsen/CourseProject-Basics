import { Ingredient } from './../../Shared/Ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../ShoppingListService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrdients: Ingredient[] = [];
  private changeSub: Subscription;
  constructor(private myShoppingService: ShoppingListServiceService) {}

  ngOnInit(): void {
    this.ingrdients = this.myShoppingService.GetIngredients();
    this.changeSub = this.myShoppingService.changeIngredients.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingrdients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.myShoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.changeSub.unsubscribe();
  }
}
