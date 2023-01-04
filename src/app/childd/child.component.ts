import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges {
  // input property binding parent to child communication
  @Input() userName: string = '';
  @Input() userObj: any = '';
  constructor() {}

  ngOnInit(): void {
    console.log('changed in oninit child component');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changed in child component', changes);
    console.log('changed in child component', changes);
  }

  // ngDoCheck() {
  //   console.log('ng do check called in child component');
  // }
}
