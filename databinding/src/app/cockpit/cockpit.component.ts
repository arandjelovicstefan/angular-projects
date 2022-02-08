import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // OVDE KORISTIMO EVENT EMITTER DA KOMUNICIRAMO SA APP COMPONENT, SALJEMO OBJEKAT NA BUTTON CLICK EVENT

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;
  // preko viewChild direktno pristupamo HTML elementu, tj element ref-u koji smo postavili tamo na input

  constructor() {}

  ngOnInit() {
    //lifecycle hook koji se poziva samo jednom prilikom inicijalizacije komponente
  }

  ngOnChanges() {
    //lifecycle hook koji se poziva nakon sto se bound input proprety menjaju tj dobijaju novu vrednost i prilikom incijalizacije komponente ! bound input property je npr @Input
  }

  ngDoCheck() {
    //lifecycle hook koji se poziva nakon sto se desi bilo kakva promena u komponenti NAPOMENA, MENJA SE NA SVAKI CHECK
    //NPR UKOLIKO KLIKNEMO NA NEKI BUTTON OVAJ HOOK CE SE POZVATI IAKO NIJE NISTA PROMENJENO
  }

  ngAfterContentInit() {
    //lifecycle hook koji se poziva nakon sto se content inicijalizuje koji je projektovan putem ng-content
  }

  ngAfterContentChecked() {
    //lifecycle hook koji se poziva svaki put kada je projektovan content cekiran
  }

  ngAfterViewInit() {
    //lifecycle hook koji se poziva nakon sto se renderuje nasa komponenta (kada se component view inicijalizuje tj kada se sve prikaze) i child komponente
  }

  ngAfterViewChecked() {
    //lifecycle hook koji se poziva svaki put kada se view check-ira
  }

  ngOnDestroy() {
    //cleanup
    //lifecycle hook koji se poziva poslednja pre nego sto unistimo komponentu (npr ako imamo ngIf)
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
