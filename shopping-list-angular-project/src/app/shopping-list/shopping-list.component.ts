import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientsChangeSub: Subscription = new Subscription();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // OVDE CE BITI PROBLEM SA NOVIM ARRAY-JEM KOJI DOLAZI IZ SERVICE PRILIKOM DODAVANJA ITEMA, ZASTO? ZATO STO MI DODAJEMO ITEME U PRAVI ARRAY A VRACAMO NOV
    // NE POKAZUJEMO NA LOKACIJU U MEMORIJI, MOZEMO OVO DA SREDIMO TAKO STO CEMO DA VRATIMO ISTI KADA GETUJEMO, ALI TO NIJE SIGURNO, ZATO MORAMO DA RESIMO NA DRUGACIJI NACIN
    this.ingredientsChangeSub = this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSub.unsubscribe();
  }
}
