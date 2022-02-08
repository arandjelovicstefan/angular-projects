import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>(); // stari nacin, subject je noviji nacin
  activatedEmitter = new Subject<boolean>(); // stari nacin, subject je noviji nacin
}
