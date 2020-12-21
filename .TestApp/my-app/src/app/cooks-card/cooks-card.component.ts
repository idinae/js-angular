import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../cooks/recipe.model';

@Component({
  selector: 'app-cooks-card',
  templateUrl: './cooks-card.component.html',
  styleUrls: ['./cooks-card.component.css']
})
export class CooksCardComponent implements OnInit {
  @Input('cook') cook: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(cook: Recipe) {
    this.recipeSelected.emit(cook);
  }
}
