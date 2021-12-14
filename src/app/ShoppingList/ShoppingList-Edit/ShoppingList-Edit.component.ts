import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppingListServiceService } from '../ShoppingListService.service';

@Component({
  selector: 'app-ShoppingList-Edit',
  templateUrl: './ShoppingList-Edit.component.html',
  styleUrls: ['./ShoppingList-Edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  componentSelector: number;
  @ViewChild('inputName', { static: false }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: false }) inputAmount: ElementRef;
  constructor(private myShoppingService: ShoppingListServiceService) {}

  ngOnInit() {}

  onAddIncredient() {
    const newIngredient = new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value);
    this.myShoppingService.AddIngredient(newIngredient);

  }
}
