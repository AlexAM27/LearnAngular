import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() item: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  onRecipeItemClick(name: String) {
    // this.recipeService.recipeSelected.emit(this.item);
    this.router.navigate([name], {relativeTo: this.route});
  }
}
