import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareReplayService {
  cachedUsers$: Observable<any>;
  constructor(private http: HttpClient) {}

  getUsers() {
    if (!this.cachedUsers$) {
      this.cachedUsers$ = this.http.get('https://jsonplaceholder.typicode.com/users').pipe();
    }
    return this.cachedUsers$;
  }
}
