import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanDeactivateComponent } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  // implementiramo interfejs da bi mogli da pozovemo canDeactivated
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.route.fragment.subscribe();
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    //isto kao za params, na snapshot-u imamo samo info prilikom pravljenja komponente i to je to, ne mozemo da menjamo, ukoliko zelimo moramo da koristimo
    // subscribe, kod ovog slucaja nije potrebno da koristimo unsubscribe na ngOnDestroy, jer ce ovo Angular sam handlovati za nas

    // velika i bitna razlika je sa snapshot, ukoliko smo na istoj stranici i sad promenimo url, on se nece update-ovati jer angular zna da smo na istoj
    // stranici i nece da je ucita opet, zbog toga koristimo subscribe da bi dohvatili takve promene
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id'])!;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
