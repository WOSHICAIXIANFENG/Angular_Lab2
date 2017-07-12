import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myvisibility2]'
})

export class Myvisibility2Directive {
  @Input() myvisibility2:boolean;

  constructor(public el: ElementRef, public renderer: Renderer) {}

  ngOnInit() {
    console.log("this.myvisibility2 = " + this.myvisibility2)
    if(this.myvisibility2) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}

/***
 *
 * This time we are using the Input decorator to receive value form the template and pass it down to the directive.
 * We have to move the implementation from the constructor to ngOnInit lifecycle method because myhidden property will be set late.
 * ngOnInit will wait for all initialization processes to be complete before executing.
 *
 *
 */
