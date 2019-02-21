import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-recipies',
  templateUrl: './list-of-recipies.component.html',
  styleUrls: ['./list-of-recipies.component.css']
})
export class ListOfRecipiesComponent implements OnInit {
  @Input ('recipes') recipes: Object
  indexSelected: Number
  constructor() {
  }

  ngOnInit() {
  	// console.log(this.recipes);
  	for (var i = 0; i < this.recipes.length; i++) {
	  // console.log('index = ', i)

      if (this.recipes[i].isSelected == true) {
      	this.indexSelected = i
      }
    }
   //iterate through this.recipes and find the recipe that is selected and instantiate indexSelected
  }

  selectRecipe(index) {
  	// console.log('selectRecipe')
  	this.recipes[this.indexSelected].isSelected == false
  	this.recipes[index].isSelected = true
  	this.indexSelected = index
  	// deselect with old value of indexSelected
  	// update new value of indexSelected
  }

}
