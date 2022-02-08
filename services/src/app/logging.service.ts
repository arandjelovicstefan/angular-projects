import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
// service sluzi da bi logiku koju koristimo na vise mesta izmestili iz klase, napravili ovde i samo je u klasi pozivali
// skracujemo posao i ne dupliramo kod
