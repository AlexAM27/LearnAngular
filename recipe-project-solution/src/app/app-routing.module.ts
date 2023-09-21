import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipiesComponent } from "./recipe/recipies.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipies', pathMatch: "full"},
  {path: 'recipies', component: RecipiesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: '/recipies'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {

}