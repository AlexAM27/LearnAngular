import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipeDetailsItem: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    this.recipeDetailsItem = this.recipeService.getRecipes().find(el => el.name === name);

    this.route.params.subscribe((params: Params) => {
      this.recipeDetailsItem = this.recipeService.getRecipes().find(el => el.name === params['name']);
    })
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach((el) => {
      this.shoppingListService.addNewIngredient(el);
    });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.route.snapshot.params['name']);
  }
}
