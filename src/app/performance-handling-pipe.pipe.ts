import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performanceHandlingPipe',
})
export class PerformanceHandlingPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    console.log('performance handling pipe called');
    return value * value;
  }
}
