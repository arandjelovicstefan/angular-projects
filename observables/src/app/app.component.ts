import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activatedSubject: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubject = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }
  ngOnDestroy(): void {
    this.activatedSubject.unsubscribe(); // uvek mora da se unsubscribe na subject !!
    // prednost je koristiti subject pre observable i naravno uvek umesto EventEmitter osim kada imamo @Output !!
    // subject uvek koristimo za komunikaciju kroz komponente preko servisa !
  }
}
