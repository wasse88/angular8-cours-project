import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  //arrOfIngredients: Ingredient[] = [];
  //inputIngredients : Ingredient;
  //@Output() ingredientToSend = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
/* 
  onAddIngredients(name, amount){
    this.inputIngredients  = new Ingredient(name.value , amount.value);
    this.ingredientToSend.emit(this.inputIngredients);
    //this.arrOfIngredients.push(this.ingObj);
    //console.log(this.ingObj.name + '-' + this.ingObj.amount);      
  } */

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);

  }

}
