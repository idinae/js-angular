import { Component, OnInit } from '@angular/core';
//import { cooks } from './../data/cooks';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.css']
})
export class CooksComponent implements OnInit {
  selectedRecipe: Recipe;
  cooks: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.cooks = this.recipeService.getRecipes();
  }


}
