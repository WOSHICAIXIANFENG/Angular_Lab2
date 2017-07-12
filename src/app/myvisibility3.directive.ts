import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myvisibility3]'
})

export class Myvisibility3Directive {
  @Input() myvisibility3:boolean;

  constructor(public el: ElementRef, public renderer: Renderer) {}

  ngOnInit() {
    console.log("this.myvisibility3 = " + this.myvisibility3);
    if(this.myvisibility3) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
