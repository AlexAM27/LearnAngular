import { Component } from "@angular/core";

interface Ingredient {
  name: string,
  amount: number,
} 

interface Recipe {
  id: number,
  image: string,
  name: string,
  description: string,
  ingredient: Ingredient[],
}

@Component({
  selector: 'app-recipes-list',
  templateUrl: 'recipes-list.component.html',
  styleUrls: ['recipes-list.component.css']
})


export class RecipesListComponent {

  // const newRecipe: Recipe = {
  //   id: 1,
  //   image: '../../../images/recipe-img.jpg',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis neque augue. Nullam sed tortor congue lorem vulputate congue ac sed massa. Donec posuere felis risus, sed efficitur massa interdum vehicula. Vivamus quis metus quis metus fringilla malesuada. Praesent eu risus a nulla pretium blandit in ac nunc. Sed et interdum dui, eu laoreet leo. Curabitur lacus mauris, volutpat at magna eu, viverra lobortis sapien. Integer dignissim, tortor quis ultrices mattis, sem est aliquet diam, in euismod magna diam vel libero. Aliquam in imperdiet nisl. Duis lacinia pretium quam, pharetra facilisis ex consequat eget. Suspendisse iaculis tempus libero, at auctor ex vestibulum in. Donec egestas mollis sollicitudin.',
  //   ingredient

  // }
  recipesList: Recipe[] = [
   
  ];


}