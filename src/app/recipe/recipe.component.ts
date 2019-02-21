import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe = { name: 'Tacos', photo: 'https://webstockreview.net/images/foods-clipart-taco-11.png', ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac', instructions: 'Put it all together.', isSelected: true, isEditing: true };

  ngOnInit() {
  }

}
