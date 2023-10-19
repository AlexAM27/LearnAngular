import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ["male", "female"];

  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submited = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    this.submited = true;
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }
}
