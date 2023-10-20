import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm;
  subscription = new Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient; 

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
      this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onSubmit() {
    const ingrName = this.shoppingListForm.value.name
    const ingrAmount = this.shoppingListForm.value.amount
    this.shoppingListService.addNewIngredient(
      new Ingredient(ingrName, ingrAmount)
    );
    this.shoppingListForm.reset();
  }

  onClearForm() {
    this.shoppingListForm.reset();
  }


}
