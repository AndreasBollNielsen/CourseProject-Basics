import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  changeIngredients = new EventEmitter<Ingredient[]>();
  ingrdients: Ingredient[] = [new Ingredient('apples',5),new Ingredient('tomatoes',10)];

  AddIngredient(ingredient:Ingredient){

    this.ingrdients.push(ingredient);
    this.changeIngredients.emit(this.ingrdients.slice());
  }

  GetIngredients(){
    return this.ingrdients.slice();
  }

addIngredients(ingredients: Ingredient[]){
this.ingrdients.push(...ingredients);
this.changeIngredients.emit(this.ingrdients.slice());
}

}
