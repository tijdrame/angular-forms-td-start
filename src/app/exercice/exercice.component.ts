import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  @ViewChild('f') myForm: NgForm;
  submited = false;
  souscrip = {
    email: '',
    password: '',
    subscriptions: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submited = true;
    this.souscrip.email = this.myForm.value.email;
    this.souscrip.password = this.myForm.value.password;
    this.souscrip.subscriptions = this.myForm.value.subscriptions;
    this.myForm.reset();
  }

}
