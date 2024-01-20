import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTittles]'
})
export class TittlesDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
   this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '40px')
  }

}
