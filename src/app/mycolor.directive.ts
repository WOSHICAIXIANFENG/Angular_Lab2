import { Directive,ElementRef, Renderer, Output,EventEmitter  } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  @Output() someEvent:EventEmitter<string> = new EventEmitter<string>();

  constructor(public el: ElementRef, public renderer: Renderer) {}

  ngAfterViewInit() {
    // Listen to click events in the component
    this.renderer.listen(this.el.nativeElement, 'click', this.clickCallback);
  }

  clickCallback = event => {
    // do something with 'event'
    //console.log(event);
    //console.log(this.el.nativeElement);
    //console.log(this.el.nativeElement.innerHTML);
    let content = this.el.nativeElement.innerHTML;
    if (content.startsWith("red")) {
      console.log("you click red color");
      //this.el.nativeElement.parentNode.style.color = "red";
      this.changeTextColor("red");
    } else if (content.startsWith("black")) {
      //this.el.nativeElement.parentNode.style.color = "black";
      this.changeTextColor("black");
    } else if (content.startsWith("blue")) {
      //this.el.nativeElement.parentNode.style.color = "blue";
      this.changeTextColor("blue");
    } else {
      //this.el.nativeElement.parentNode.style.color = "purple";
      this.changeTextColor("purple");
    }
  };

  changeTextColor(colour: string) {
    this.el.nativeElement.parentNode.style.color = colour;
    this.someEvent.emit(colour);
  }


}
