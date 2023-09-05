import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() showItem = new EventEmitter<{recipies: boolean, shoppingList: boolean}>();

  onRecipiesClick() {
    this.showItem.emit({recipies: true, shoppingList: false});
  }

  onShoppingListClick() {
    this.showItem.emit({recipies: false, shoppingList: true});
  }


}
