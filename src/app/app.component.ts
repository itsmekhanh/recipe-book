import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = [
    { name: 'Tacos', photo: 'https://www.google.com', ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac', instructions: 'Put it all together.', isSelected: true, isEditing: false },
    { name: 'Tacos', photo: 'https://www.google.com', ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac', instructions: 'Put it all together.', isSelected: false, isEditing: false  },
    { name: 'Tacos', photo: 'https://www.google.com', ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac', instructions: 'Put it all together.', isSelected: false, isEditing: false  },
    { name: 'Tacos', photo: 'https://www.google.com', ingredients: 'Meat, Tortilla, Cheese, Sour Cream, Pico, Guac', instructions: 'Put it all together.', isSelected: false, isEditing: false  }
  ];
}
