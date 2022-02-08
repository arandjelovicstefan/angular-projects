import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // ovde dodajemo custom property binding, dodali smo default value ali mogu da se menjaju od spolja kako bi bila promena dinamicka a ne hardcode-ovana
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  // ovde koristimo HostBinding dekorator, u zagradi dodajemo DOM property kom cemo da dodelimo vrednost, ovde je u pitanju style pa property backgroundColor
  // camelCase je ovde obavezan u zagradi !!

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor; // razlog zasto smo dodali ovde a ne nakon @HostBinding je zato sto setujemo defaultColor van ove komponente
    //pa da ne bi imali bug i da bi se setovalo kako treba a to je nakon ucitavanja HTML property-ja
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }

  // bolji nacin za implementiranje promene na HTML elementu nego basic highlight jer ne pristupamo direktno
  // koristimo renderer za bilo kakvu DOM manipulaciju !!
}
