import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface employee {
  firstName: string;
  lastName: string;
  dept: string;
  salary: number;
  doj: Date;
}
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  date = new Date();
  username: string = 'anusha chinnaru';
  serachVal: string = '';
  numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  per = 0.7414;

  employees = [
    {
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22'),
    },
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16'),
    },
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03'),
    },
  ];

  onAddUser() {
    this.employees.push({
      firstName: 'Diptiii',
      lastName: 'Singhhhhh1',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03'),
    });

    this.numbersArr.push(13);
    console.log(this.employees);
  }
  constructor(private datepipe: DatePipe) {}

  ngOnInit(): void {
    console.log(this.date);
    const todaydate = this.datepipe.transform(new Date());
    console.log(todaydate);
  }
}
