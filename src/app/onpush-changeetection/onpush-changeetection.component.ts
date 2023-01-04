import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush-changeetection',
  templateUrl: './onpush-changeetection.component.html',
  styleUrls: ['./onpush-changeetection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChangeetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
