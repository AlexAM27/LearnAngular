import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {

  @ViewChild('form') signUpForm: NgForm;

  defaultSubscription = 'advanced';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value.email);
    console.log(this.signUpForm.value.subscription);
    console.log(this.signUpForm.value.password);
    this.signUpForm.reset();
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

}
