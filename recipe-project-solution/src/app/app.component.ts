import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project-solution';
  showRecipies = false;
  showShoppingList = false;

  @Input() showMenu: {recipies: boolean, shoppingList: boolean};

  onShowMenuItem(item) {
    this.showRecipies = item.recipies;
    this.showShoppingList = item.shoppingList;
  }
}
