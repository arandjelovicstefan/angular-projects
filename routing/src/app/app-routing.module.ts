import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    // canActivate: [AuthGuardService],  ovde dodajemo AuthGuard, primenjen je na ovu komponentu i na sve child komponente, u sustini dodaje neku vrstu provere kada zelimo da pristupimo nekoj
    // strani koju bi npr trebali da vide samo ulogovani korisnici, to mozemo da handle-ujemo ovako
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } }, // za razliku od drugih guarda, ovde resolve prima objekat! poenta resolvera je da kada se pozove ova ruta
      // da mapira data sto ima u resolveru i da nam vrati u tom trenutku, sav data koji nam vrati bice sacuvan ovde u ovaj server objekat
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }, // ** znaci da catch-uje sve rute koje nemamo, VAZNO !! MORA BITI NA KRAJU DA BI ZNAO KOJE RUTE IMAMO, UKOLIKO BI STAVILI OVU RUTU KAO PRVU
  // UVEK BI RREDIREKTOVAO !! ** je wildcard route
];

// VAZNO!
// DA BI CHILD ROUTE FUNKCIONISALE KAKO TREBA, MORAMO U TOJ KOMPONENTI GDE IMAMO CHILD ROUTE DA POZOVEMO <ROUTER-OUTLET>, JER CE RUTA TRAZITI ROUTER OUTLET A KAKO JE GLAVNI U APP COMPONENT A
// SAMA RUTA UGNEZDJENA UNUTAR NPR /SERVERS RUTE, NECE GA VIDETI I VRATICE ERROR
// ISTO TAKO I ZA USERS RUTU

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
