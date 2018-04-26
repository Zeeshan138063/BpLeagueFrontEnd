import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // login = new loginModel('zeeshan@gmail.com' ,12345);

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
