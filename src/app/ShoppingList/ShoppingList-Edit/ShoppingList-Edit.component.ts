import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

@Component({
  selector: 'app-ShoppingList-Edit',
  templateUrl: './ShoppingList-Edit.component.html',
  styleUrls: ['./ShoppingList-Edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  componentSelector: number;
  @Output() AddEvent = new EventEmitter<Ingredient>();
  @ViewChild('inputName', { static: false }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: false }) inputAmount: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddIncredient() {
    const newIngredient = new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value);
    this.AddEvent.emit(newIngredient);
  }
}
