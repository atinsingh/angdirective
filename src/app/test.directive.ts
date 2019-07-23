import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = 'teal';
    this.element.nativeElement.innerHtml = 'Coming from directive';
  }

}
