import { serverElements } from './../shared/serverElements.model';
import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // emulated-default, none-ukoliko selektujemo, css style bice globalno, shadowDom-isto kao emulated, samo u browserima koji podrzavaju shadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('heading', { static: true }) header!: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph!: ElementRef;
  @Input() element!: serverElements;
  @Input() name!: string;
  //ovde ocekujemo samo NAME, koristimo INPUT da bi povezali sa komponentom, INPUT je dekorator koji sluzi da binduje property
  //ocekujemo samo NAME i menjamo samo NAME iz razloga da bi se trigerovao ngOnChanges !! da menajamo NAME u elements, ngOnChanges se nece trigerovati jer je
  //element objekat, a objekat na promenu vrednosti i dalje pokazuje na istu lokaciju u memoriji tako da nemamo nikakvu promenu dok ovde imamo samo property i
  //imamo direktnu promenu jer je property primitivni tip dok je objekat reference type !!
  //posto smo dodali input, moze biti bound-ovan spolja !!

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content:' + this.header.nativeElement.textContent);
    //primer da na ngOnInit ne mozemo da pristupamo HTML-u i da uzimamo i menjamo podatke jer se izvrsava pre nego sto se HTML ocita
    console.log(
      'Text Content of paragraph:' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'Text Content of paragraph:' + this.paragraph.nativeElement.textContent
    );
    //nakon sto se content ucita, bice prikazan value !
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content:' + this.header.nativeElement.textContent);
    //ovde imamo potpuni pristup jer se vizuelni prikaz potpuno ucitao pa se ovaj hook pozvao
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
