import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }
}
