import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleComponent {
  constructor() {}
}
