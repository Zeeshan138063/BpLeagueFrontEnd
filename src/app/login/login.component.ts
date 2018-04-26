import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher} from '../sign-up/sign-up.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';


class loginModel {

  constructor(
    public email:string,
    public  password: any
  ){

  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new loginModel('zeeshan@gmail.com' ,12345);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onSubmit(){}

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
