import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipe/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown-directive';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
