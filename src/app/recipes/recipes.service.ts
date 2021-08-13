import { Recipe } from './recipe.module';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe []=[
    {
      id:'r1',
      title:'schnitzel',
      imageUrl:
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WCap-AKqlBD0kuK-yrHJdApQPdy1CPQOdg&usqp=CAU',
      ingredients:['French Fries', 'pork Meat', 'salad']
      },
      {
        id:'r2',
        title:'spaghiti',
        imageUrl:
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvJzoPClBf0e0utewf18yzVhb7jH0I9FfuA&usqp=CAU',
        ingredients:['spaghiti', ' Meat', 'salad']
        }
          
  ]
  
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  };

  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipe.id !== recipeId;
    });
  }

}
