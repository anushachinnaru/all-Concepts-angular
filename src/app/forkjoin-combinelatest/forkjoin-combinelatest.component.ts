import { Component, OnInit, Pipe } from '@angular/core';
import { combineLatest, forkJoin, interval, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forkjoin-combinelatest',
  templateUrl: './forkjoin-combinelatest.component.html',
  styleUrls: ['./forkjoin-combinelatest.component.scss'],
})
export class ForkjoinCombinelatestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // forkJoin example with array
    forkJoin([
      this.http.get('https://jsonplaceholder.typicode.com/users'),
      this.http.get('https://jsonplaceholder.typicode.com/posts'),
      interval(100).pipe(take(5)),
    ]).subscribe((data) => {
      console.log(data, 'data');
    });

    // forkJoin example with object
    // forkJoin({
    //   users: this.http.get('https://jsonplaceholder.typicode.com/users'),
    //   posts: this.http.get('https://jsonplaceholder.typicode.com/posts'),
    //   inter: interval(100).pipe(take(5)),
    // }).subscribe((data) => {
    //   console.log(data, 'data');
    // });

    //  CombineLatest
    // combineLatest([
    //   this.http.get('https://jsonplaceholder.typicode.com/users'),
    //   this.http.get('https://jsonplaceholder.typicode.com/posts'),
    //   interval(100).pipe(take(5)),
    // ]).subscribe((data) => {
    //   console.log(data);
    // });

    // combineLatest({
    //   users: this.http.get('https://jsonplaceholder.typicode.com/users'),
    //   posts: this.http.get('https://jsonplaceholder.typicode.com/posts'),
    //   inter: interval(100).pipe(take(5)),
    // }).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
