import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cooks: Recipe[];
  id: string;
  cookName: string = '';
  cookDescription: string = '';
  cookImageUrl: string = '';
 
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cooks = this.recipeService.getRecipe(this.id);
  }

  onUpdateRecipe() {
    this.recipeService.updateRecipe(this.id, this.cookName, this.cookDescription, this.cookImageUrl);
  }

}