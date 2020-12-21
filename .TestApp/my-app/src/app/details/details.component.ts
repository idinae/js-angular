import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../cooks/recipe.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cook: Recipe;


  constructor() { }

  ngOnInit(): void {
  }

}