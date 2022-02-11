import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupForm!: NgForm;
  // drugi nacin za pristup formi, takodje i nacin koji nam dozvoljava da imamo pristup formi ranije a ne samo na submit !!

  defaultQuestion: string = 'Pet';
  answer: string = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   // type mora da bude NgForm da bi mogli da izvucemo samo objekat iz forme
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
