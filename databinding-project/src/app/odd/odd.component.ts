import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  @Input() oddNumber!: number;
  // ovde ce broj biti setovan van komponente zato treba @Input

  constructor() {}

  ngOnInit(): void {}
}
