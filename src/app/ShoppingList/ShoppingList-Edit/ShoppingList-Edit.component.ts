import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppingListServiceService } from '../ShoppingListService.service';

@Component({
  selector: 'app-ShoppingList-Edit',
  templateUrl: './ShoppingList-Edit.component.html',
  styleUrls: ['./ShoppingList-Edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  componentSelector: number;
  editSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  constructor(private myShoppingService: ShoppingListServiceService) {}

  ngOnInit() {
    this.editSubscription = this.myShoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedIngredient = this.myShoppingService.GetIngredient(index);
      this.shoppingForm.setValue({name: this.editedIngredient.name,amount: this.editedIngredient.amount})
    });
  }

  onAddIncredient(form: NgForm) {
    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if(this.editMode)
    {
      this.myShoppingService.UpdateIngredient(this.editedItemIndex,newIngredient);
    }
    else
    {
      this.myShoppingService.AddIngredient(newIngredient);

    }

    this.editMode = false;
    this.shoppingForm.reset();
  }

  onClear(){
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.myShoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
}
