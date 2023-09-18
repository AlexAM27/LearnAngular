import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddNewShoppingItem() {
    const ingrName = this.name.nativeElement.value;
    const ingrAmount = this.amount.nativeElement.value;
    this.shoppingListService.addNewIngredient(
      new Ingredient(ingrName, ingrAmount)
    );

    this.name.nativeElement.value = null;
    this.amount.nativeElement.value = null;
  }
}
