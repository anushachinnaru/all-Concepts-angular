import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShareReplayService } from '../share-replay.service';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharereplayComponent implements OnInit {
  users$: Observable<any>;
  users1$: Observable<any>;

  constructor(private sharereplayservice: ShareReplayService) {}

  ngOnInit(): void {
    this.users$ = this.sharereplayservice.getUsers().pipe(shareReplay(1));
    this.users1$ = this.sharereplayservice.getUsers();
  }
}
