import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'simply a test', 'https://i0.wp.com/www.vegetarianventures.com/wp-content/uploads/2018/12/ChickpeaNoodleSoupBlog-14-of-15.jpg?fit=1013%2C1520&ssl=1'),
    new Recipe('Test Recipe', 'simply a test', 'https://i0.wp.com/www.vegetarianventures.com/wp-content/uploads/2018/12/ChickpeaNoodleSoupBlog-14-of-15.jpg?fit=1013%2C1520&ssl=1'),
    new Recipe('Test Recipe', 'simply a test', 'https://i0.wp.com/www.vegetarianventures.com/wp-content/uploads/2018/12/ChickpeaNoodleSoupBlog-14-of-15.jpg?fit=1013%2C1520&ssl=1')


  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
