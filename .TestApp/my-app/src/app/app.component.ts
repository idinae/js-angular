import { Component, OnInit } from '@angular/core';

import { Recipe } from './cooks/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})

export class AppComponent implements OnInit{
  title = 'my-app';
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (cook: Recipe) => {
        this.selectedRecipe = cook;
      }
    );
  }

}