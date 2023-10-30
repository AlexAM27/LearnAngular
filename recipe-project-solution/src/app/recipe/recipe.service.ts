import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
 
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'simple test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Test 2',
      'simple test 2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512',
      [new Ingredient('Milk', 1), new Ingredient('Cucumber', 20)]
    ),
  ];

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipie(name: String) {
    return this.recipes.find(el => el.name == name);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(name: String, recipe: Recipe) {
    const recipeId = this.recipes.findIndex(el => el.name == name);
    this.recipes[recipeId] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(name: String) {
    this.recipes = this.recipes.filter(el => el.name != name);
    this.recipesChanged.next(this.recipes.slice());
  }
}
