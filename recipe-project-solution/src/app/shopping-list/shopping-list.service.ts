import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  
  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addNewIngredients(ingredients: Ingredient[]) {
    this.ingredients.concat(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  editIngredient(index: number, ingredient: Ingredient) {    
    this.ingredients[index] = ingredient;    
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
