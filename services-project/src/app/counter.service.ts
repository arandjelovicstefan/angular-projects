import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementCounter(type: string) {
    // if (type === 'active') {
    //   this.activeToInactiveCounter++;
    //   console.log(this.activeToInactiveCounter);
    // } else if ('inactive') {
    //   this.inactiveToActiveCounter++;
    //   console.log(this.inactiveToActiveCounter);
    // }
    switch (type) {
      case 'active':
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active:' + this.inactiveToActiveCounter);
        break;
      case 'inactive':
        this.activeToInactiveCounter++;
        console.log('Active to Inactive:' + this.activeToInactiveCounter);
        break;
    }
  }
}
