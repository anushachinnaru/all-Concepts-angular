import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.userForm.setValue({
        fname: 'anusha',
        lname: 'chinnaru',
        email: 'anusha19121995@gmail.com',
        address: {
          city: 'markapur',
          pincode: 523316,
        },
      });
    }, 0);
  }

  onSubmit(userForm: NgForm): void {
    console.log(userForm);
  }

  onReset(): void {
    this.userForm.controls['fname'].reset();
  }

  onResetForm(): void {
    this.userForm.resetForm();
  }

  // patch value
  onPatchVals(): void {
    // this.userForm.controls['address'].patchValue({
    //   city: 'vijayawada',
    //   pincode: 1222233,
    // });
    let address = this.userForm.controls['address'] as FormGroup;
    address.patchValue({ city: 'vijayawada', pincode: 1222233 });
  }

  // intializing template values
  onIntialize(): void {
    console.log(this.userForm);
    this.userForm.setValue({
      fname: 'anusha',
      lname: 'chinnaru',
      email: 'anusha19121995@gmail.com',
      address: {
        city: 'markapur',
        pincode: 523316,
      },
    });
  }
}
