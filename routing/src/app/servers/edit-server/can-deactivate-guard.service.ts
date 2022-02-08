import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(
    // ova metoda bice pozvana od strane rutera u trenutku kada pokusamo da napustimo trenutnu stranicu
    component: CanDeactivateComponent,
    // ovde component mora da bude isti, zbog toga sto mora da bude komponenta u kojoj ce biti importovan CanDeactivateComponent interfejs
    // koji ima metodu CanDeactivated koja ce zapravo da trigeruje ovu metodu
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot // opciono
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
