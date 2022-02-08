import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fimg1.cookinglight.timeinc.net%252Fsites%252Fdefault%252Ffiles%252Fstyles%252F4_3_horizontal_-_1200x900%252Fpublic%252Fimage%252F2016%252F01%252Fmain%252F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%253Fitok%253DMcbboinY&w=400&q=85',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fimg1.cookinglight.timeinc.net%252Fsites%252Fdefault%252Ffiles%252Fstyles%252F4_3_horizontal_-_1200x900%252Fpublic%252Fimage%252F2016%252F01%252Fmain%252F1601p25-skillet-chicken-roasted-potatoes-carrots.jpg%253Fitok%253DMcbboinY&w=400&q=85',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
    // zanimljivo resenje, posto ovde getujemo recipes od spolja, kako ne bi vratili potpuno isti objekat koristimo slice bez argumenta, koji ce da vrati nov array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
