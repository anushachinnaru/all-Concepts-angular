import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss'],
})
export class FormbuilderComponent implements OnInit {
  userform: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      name: '',
      skills: this.formbuilder.array([]),
      hobbies: this.formbuilder.array([]),
    });
  }

  onSubmit(): void {
    console.log(this.userform);
  }

  get getSkills(): FormArray {
    console.log(this.userform.get('skills'));
    return this.userform.get('skills') as FormArray;
  }

  get getHobbies() {
    return this.userform.get('hobbies') as FormArray;
  }

  addSkills() {
    let skills = this.userform.get('skills') as FormArray;
    skills.push(new FormControl());
    console.log(this.userform);
  }

  addHobbies() {
    let hobbies = this.userform.get('hobbies') as FormArray;
    hobbies.push(
      this.formbuilder.group({
        nameofthehobbie: ['', Validators.required],
        timePreferred: ['', Validators.required],
      })
    );
  }
}
