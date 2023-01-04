import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective implements OnInit {
  // custom attribiute directive using elementRef and renderer2
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef, 'this.elementRef');
    console.log(this.renderer, 'this.Renderer2');
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }
}
