import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appbacup',
  templateUrl: './appbacup.component.html',
  styleUrls: ['./appbacup.component.css']
})
export class AppbacupComponent  {
  @ViewChild('f') signupForm: NgForm;
  answer ='';
  genders = ['male', 'female'];
  submited = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  /*onSubmit(form: NgForm){
    console.log(form);
  }*/

  onSubmit(){
    this.submited = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

}
