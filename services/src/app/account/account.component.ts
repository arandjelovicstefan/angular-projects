import { Component, Input } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
  // ZBOG HIJERARHIJSKOG NACINA DELOVANJA SERVISA, OVDE IZ PROVIDERS BRISEMO ACCUNTSERVICE
  // KAKO NE BI OVDE PRAVILI NOVU INSTANCU SERVISA VEC DA IMAMO JEDNU ISTU INSTANCU U APP-modulu
  // CONSTRUCTOR I SVE OSTALO OSTAJE ISTO, SAMO NE DODAJEMO U PROVIDERS, VEC DA BI OSTVARILI POVEZANOST, GLAVNA INSTANCA MORA BITI U NAJSTARIJOJ PARENT KLASI
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string };
  @Input()
  id!: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    // ovako se koriste services u Angularu !!! ime je proizvoljno ali moramo da naglasimo tip podataka a to je zapravo klasa u kojoj je service!
    // posto smo ovde definisali tip, Angular ce ga prepoznati i ce da pokusa da nam da argument, tip u ovom slucaju, nama treba instanca od loggingService
    // zato smo i definisali tip
    // posto Angular ovde zna sta nam treba, ali ne zna kako da nam dostavi instancu, potrebno je da dodamo "providers" property u @Component
    // i da dodamo services u niz
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    //ovde ne pravimo instancu rucno, to sada Angular radi za nas
    this.accountsService.statusUpdated.emit(status);
    // OVO JE PRIVREMENI NACIN KAKO DA EMITUJEMO STVARI U SERVIS ODAKLE MOZEMO SVUDA DA GA KORISTIMO, KASNIJE CEMO TO DA RADIMO NA DRUGI NACIN
    //TJ NA DRUGI NACIN CEMO DA EMITUJEMO EVENT A PRIHVATACEMO IH SA SUBSCRIBE
  }
}
