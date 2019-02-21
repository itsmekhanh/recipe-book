import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {


  @Input()  recipe;
  // recipe = {
  //   name: 'Tacos',
  //   photo: 'https://www.google.com',
  //   ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac',
  //   instructions: 'Put it all together.',
  //   isSelected: false,
  //   isEditing: false
  // }
  constructor() { }

  ngOnInit() {
  }

}
