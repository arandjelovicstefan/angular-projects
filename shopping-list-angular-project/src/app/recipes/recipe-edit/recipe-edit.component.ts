import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== null;
      // NIJE POTREBNO DA UBACUJEMO ngOnDestroy DA RADIMO CLEANUP, TO CE ANGULAR ZA NAS DA ODRADI JER JE OVO INTEGRISAN OBSERVABLE
      // CUSTOM OBSERVABLE MORAJU DA SE OCISTE SA ngOnDestroy TJ UNSUBSCRIBE
    });
  }
}
