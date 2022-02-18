import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupForm!: NgForm;
  @ViewChild('loginForm') loginForm!: NgForm;
  // drugi nacin za pristup formi, takodje i nacin koji nam dozvoljava da imamo pristup formi ranije a ne samo na submit !!
  defaultQuestion: string = 'Pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted: boolean = false;

  formSwitch: boolean = true;

  suggestUserName() {
    const suggestedName = 'Superuser'; // ovo moze da se resi na vise nacina, jedan je two-way databinding, drugi da pristupimo direktno formi preko viewChild

    // sa setValue mozemo isto da pristupimo, ali je problem sto moramo bas onako kakva je forma da dodamo objekat i sve vrednosti tom prilikom menjamo
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    //bolji nacin je sa patchValue, mozemo da setujemo samo jedan value bez potrebe da se resetuju druge stvari
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   // type mora da bude NgForm da bi mogli da izvucemo samo objekat iz forme
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset(); // resetovanje forme, moguce je i sa setValue ako hocemo da resetujemo na neki specifican value
  }

  onFormSwitch() {
    this.formSwitch = !this.formSwitch;
  }

  onSubmitLogin() {
    console.log(this.loginForm.form);
    // this.loginForm.reset();
  }
}
