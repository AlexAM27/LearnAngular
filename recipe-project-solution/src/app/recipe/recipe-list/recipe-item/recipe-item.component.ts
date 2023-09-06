import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css']
})

export class RecipeItemComponent {

  @Input() item: Recipe;

  @Output() recipeItem = new EventEmitter<void>();

  onRecipeItemClick() {
    this.recipeItem.emit();
  }

}