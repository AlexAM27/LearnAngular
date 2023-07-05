import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css']
})

export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('Test', 'simple test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512'),
    new Recipe('Test', 'simple test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5d85474013c270d16accdcca47f84297%2F168743755530420230621_144224.jpg&q=60&c=sc&orient=true&poi=auto&h=512')
  ]

}