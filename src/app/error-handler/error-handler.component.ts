import { Component, OnInit } from '@angular/core';
import { HttpclientComponent } from './../httpclient/httpclient.component';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    localStorage.setItem('breakfast', 'cereal');
    sessionStorage.setItem('dinner', 'southindianmeals');
    this.http
      .post('https://sample-whole-angular-default-rtdb.firebaseio.com/posts.json', {
        postname: 'letter',
        postcount: 2,
      })
      .subscribe((data) => {
        console.log(data, 'data');
      });
  }

  errorhandler1() {
    // const a = b;

    this.http.get('https://jsonplaceholder.typicode.com/users/12').subscribe((data) => {
      console.log(data);
    });

    this.http
      .get('https://jsonplaceholder.typicode.com/users/asasa')
      .pipe(
        catchError((error) => {
          console.log(error, 'error in catch error');
          return throwError(error);
        })
      )
      .subscribe();
  }

  errorhandler2() {}
}
