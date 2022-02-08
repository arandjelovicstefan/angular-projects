import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  username: string = '';
  paragraphToggle: boolean = false;
  buttonClicks: number[] = [];

  onResetUser() {
    this.username = '';
  }

  onToggleParagraph() {
    this.buttonClicks.push(this.buttonClicks.length + 1);
    this.paragraphToggle = !this.paragraphToggle;
  }
}
