import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription = new Subscription();
  constructor() {}

  ngOnInit() {
    // this.observableSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater then 3 !'));
        }
      }, 1000);
    });

    this.observableSubscription = customIntervalObservable
      .pipe(
        map((data: number) => {
          return 'Round' + (data + 1);
        })
      )
      .subscribe(
        (count: number) => {
          console.log(count);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('Observable completed !');
        }
      );
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }
}
