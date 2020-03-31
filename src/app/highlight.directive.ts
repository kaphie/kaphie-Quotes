import {Directive, ElementRef, Input} from '@angular/core';
import {Quote} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() likes: Quote;

  constructor(private elem: ElementRef) {
      this.elem.nativeElement.style.backgroundColor = '#1fc88d';
  }

}
