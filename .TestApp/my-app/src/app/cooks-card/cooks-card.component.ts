import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-cooks-card',
  templateUrl: './cooks-card.component.html',
  styleUrls: ['./cooks-card.component.css']
})
export class CooksCardComponent implements OnInit {
  @Input('cook') cook: Recipe;
  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(cook: Recipe) {
    // this.recipeSelected.emit(cook);
    this.recipeService.recipeSelected.emit(this.cook);
  }
}
