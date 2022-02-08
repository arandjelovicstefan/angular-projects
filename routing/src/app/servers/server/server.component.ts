import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server']; // ovde sada koristimo resolver da bindujemo data, ime "server" mora da bude isto kao u app-routing module za resolver !!
      // svi podaci su primljeni sada isto kao kroz rutu, ovo je jako bitan pristup za asinhrono dohvatanje podataka!!
    });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id)!;
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id'])!;
    // });
  }

  onEdit() {
    // this.router.navigate(["/servers",this.server.id,"edit"])  PRVA VARIJANTA AKO NECEMO SA RELATIVNOM RUTOM DA RADIMO VEC DA PISEMO KAKAV CE CEO URL DA BUDE
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    }); // DRUGA VARIJANTA, RELATIVNO DODAVANJE EDITA NA OVU RUTU NA KOJOJ SE NALAZIMO NA KRAJU URL-A
  }
}
