import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})


export class AppComponent implements OnInit{
  title = 'my-app';

  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
  }

}