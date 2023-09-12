import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'simple test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512'
    ),
    new Recipe(
      'Test 2',
      'simple test 2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
