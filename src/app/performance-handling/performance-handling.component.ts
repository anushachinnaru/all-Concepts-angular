import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-handling',
  templateUrl: './performance-handling.component.html',
  styleUrls: ['./performance-handling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceHandlingComponent {
  numVal: number;
  constructor() {}

  someFuncCall(x: number) {
    console.log('function called in component');
    return x * x;
  }

  onClick() {}
}
