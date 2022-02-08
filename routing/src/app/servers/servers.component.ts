import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers', { relativeTo: this.route }]);
    // ukoliko ne dodamo "/" to je relative path i nadovezuje se na trenutni url koji postoji u komponenti, za razliku od router linka, router.navigate ne zna
    // u kojoj se komponenti nalazimo pa ukoliko ne stavimo "/" ocitace kao da smo je stavili, ali prima drugi parametar gde mozemo da preciziramo
    // da je relativna u odnosu na neki link i da se tu doda... najprostije resenje je ovde da se ukuca ceo link kako treba
  }
}
