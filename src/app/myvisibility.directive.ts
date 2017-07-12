import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})

export class MyvisibilityDirective {
  @Input() anotherHide:boolean;

  @Input('hide') defaultValue=false;

  // constructor(private e: ElementRef, private r: Renderer) {
  //   //this.hide = this.defaultValue;
  //   console.log(this.anotherHide);
  //   if (this.anotherHide) {
  //     //e.nativeElement.style.display='none';
  //     r.setElementStyle(e.nativeElement, 'display', 'none')
  //   } else {
  //     r.setElementStyle(e.nativeElement, 'display', 'block');
  //   }
  // }

  constructor(private e: ElementRef, private r: Renderer) {
    //this.hide = this.defaultValue;
    console.log("this.anotherHide = " + this.anotherHide); // undefine. we have to use it in ngOnInit(){}
    r.setElementStyle(e.nativeElement, 'display', 'none')
  }

}
