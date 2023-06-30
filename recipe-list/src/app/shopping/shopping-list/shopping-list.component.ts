import { Component } from "@angular/core";

interface Product {
  name: string;
  amount: number;
  id: number;
}
@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css']
})

export class ShoppingListComponent {

  shoppingList: Product[] = [];
  productName = '';
  productAmount: number;
  productStartId = 1;

  createProduct() {
    const newProduct: Product = {
      name: this.productName,
      amount: this.productAmount,
      id: this.productStartId,
    };
    this.shoppingList.push(newProduct);
    this.productStartId++;

    this.productName = '';
    this.productAmount = null;    
  }

  deleteProduct(id: number) {
    const prod = this.shoppingList.find(el => el.id === id);
    const indexOfProduct = this.shoppingList.indexOf(prod);
    this.shoppingList.splice(indexOfProduct, 1);
  }

}