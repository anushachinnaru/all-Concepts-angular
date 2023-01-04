import {
  Component,
  OnInit,
  DoCheck,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() username: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  // ngDoCheck(): void {
  //   console.log('ngdocheck called');
  // }

  ngOnDestroy(): void {
    console.log('ngondestroy called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges called');
  }

  ngAfterContentInit(): void {
    console.log('ngcontentinit called');
  }
}
