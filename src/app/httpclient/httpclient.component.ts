import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
interface postdata {
  body: string;
  id: number;
  title: string;
  userId: number;
}
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss'],
})
export class HttpclientComponent implements OnInit {
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.httpclient
      .get<postdata[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data: postdata[]) => {
          data.forEach((element) => {
            element.title = 'title';
          });
          return data;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
