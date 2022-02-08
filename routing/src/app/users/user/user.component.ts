import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  paramsSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // pristupamo ID-ju koji smo poslali, isto kao useParams u React
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    }); // prvi parametar u subscribe je da se pozove kada god se parametri menjaju
    // OVAJ KOD NECE BITI POZVAN KADA SE POZOVE NG ON INIT, VEC ISKLJUCIVO KADA SE MENJAJU PARAMETRI KOJE SMO NAVELI OVDE
    // koristiti uvek ovaj pristup da bi dobili informacije iz url route ukoliko su nam potrebni, tj ukoliko su nam potrebni kada se menjaju
    // u drugim slucajevima, imamo in na snaopshot-u koji se prave prilikom kreiranja objekta
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
