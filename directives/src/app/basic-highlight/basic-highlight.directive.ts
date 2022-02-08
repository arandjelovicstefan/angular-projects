import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichHighlight]',
  // kada dodamo [] ovde, onda mozemo samo da dodamo atribut elementu tj da ovaj directive dodamo samo kao atribut bez da bilo sta njemu prosledjujemo
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
