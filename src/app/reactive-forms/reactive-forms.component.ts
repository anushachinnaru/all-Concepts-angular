import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  userform: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userform = new FormGroup({
      fname: new FormControl('anusha', Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(null, Validators.required),
        pincode: new FormControl(Validators.minLength(5)),
      }),
    });
  }

  onSubmit(): void {
    console.log(this.userform, 'this.userform');
  }
}
