import { Component, OnInit } from '@angular/core';
//import { cooks } from './../data/cooks';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-cooks-list',
  templateUrl: './cooks-list.component.html',
  styleUrls: ['./cooks-list.component.css']
})
export class CooksListComponent implements OnInit {
  cooks: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.cooks = this.recipeService.getRecipes();
  }
}