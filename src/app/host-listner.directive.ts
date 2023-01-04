import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostListner]',
})
export class HostListnerDirective {
  constructor(private renderer2: Renderer2, private elementref: ElementRef) {}

  @HostListener('click') click(eventData: Event): any {
    this.renderer2.setStyle(this.elementref.nativeElement, 'backgroundColor', 'green');
    this.colorval = 'red';
  }

  @HostBinding('style.color') colorval: any;
}
