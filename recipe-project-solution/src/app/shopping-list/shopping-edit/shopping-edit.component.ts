import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() newShoppingItem = new EventEmitter<Ingredient>()

  onAddNewShoppingItem() {
    const ingrName = this.name.nativeElement.value;
    const ingrAmount = this.amount.nativeElement.value;
    this.newShoppingItem.emit(new Ingredient(ingrName, ingrAmount));
    this.name.nativeElement.value = null;
    this.amount.nativeElement.value = null;
  }

}
