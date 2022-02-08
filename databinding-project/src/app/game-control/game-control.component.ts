import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  // sada kada smo dodali @Output, ovaj event moze biti dohvacen i van ove komponente !
  interval: any;
  lastNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(++this.lastNumber);
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
  }
}
