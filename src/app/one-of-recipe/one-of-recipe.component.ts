import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-one-of-recipe',
  templateUrl: './one-of-recipe.component.html',
  styleUrls: ['./one-of-recipe.component.css']
})
export class OneOfRecipeComponent implements OnInit {
  @Input ('recipe') recipe: Object
  @Input('index') index: Number
  @Output ('selectedRecipe') selectRecipe = new EventEmitter();

  name: string
  photo: string
  constructor() {
  }

  ngOnInit() {
  	this.name = this.recipe.name
  	this.photo = this.recipe.photo
  }
  onClick() {
  	// console.log('click')
  	this.selectRecipe.emit(this.index)
  }

}
