import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Some app for lists';
  shoppingListVisible = false;
  recipesListVisible = false;

  showShoppingList() {
    this.shoppingListVisible = true;
    this.recipesListVisible = false;
  }

  showRecipesList() {
    this.shoppingListVisible = false;
    this.recipesListVisible = true;
  }
}
