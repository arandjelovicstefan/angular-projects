import { Component } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
  // ZBOG HIJERARHIJSKOG NACINA DELOVANJA SERVISA, OVDE IZ PROVIDERS BRISEMO ACCUNTSERVICE
  // KAKO NE BI OVDE PRAVILI NOVU INSTANCU SERVISA VEC DA IMAMO JEDNU ISTU INSTANCU U APP-modulu
  // CONSTRUCTOR I SVE OSTALO OSTAJE ISTO, SAMO NE DODAJEMO U PROVIDERS, VEC DA BI OSTVARILI POVEZANOST, GLAVNA INSTANCA MORA BITI U NAJSTARIJOJ PARENT KLASI
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    // ovako se koriste services u Angularu !!! ime je proizvoljno ali moramo da naglasimo tip podataka a to je zapravo klasa u kojoj je service!
    // posto smo ovde definisali tip, Angular ce ga prepoznati i ce da pokusa da nam da argument, tip u ovom slucaju, nama treba instanca od loggingService
    // zato smo i definisali tip
    // posto Angular ovde zna sta nam treba, ali ne zna kako da nam dostavi instancu, potrebno je da dodamo "providers" property u @Component
    // i da dodamo services u niz
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus); STARI NACIN
    this.loggingService.logStatusChange(accountStatus);
    //ovde ne pravimo instancu rucno, to sada Angular radi za nas
  }
}
