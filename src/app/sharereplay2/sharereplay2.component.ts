import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShareReplayService } from './../share-replay.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sharereplay2',
  templateUrl: './sharereplay2.component.html',
  styleUrls: ['./sharereplay2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sharereplay2Component implements OnInit {
  users$: Observable<any>;
  constructor(private sharereplayservice: ShareReplayService) {}

  ngOnInit(): void {
    this.users$ = this.sharereplayservice.getUsers();
  }
}
