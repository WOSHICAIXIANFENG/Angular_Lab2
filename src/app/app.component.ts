import { Component,ElementRef, Renderer  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson13 Lab';
  hide = true;

  bgColor:string = "black";

  constructor(public el: ElementRef, public renderer: Renderer) {

  }

  private outputData:string;

  showItemColor(color) {
    this.outputData = "Your choice color = " + color;
    // update all h2's color style
    this.bgColor = color;
  }

  getBgColor() {
    console.log("this.bgColor = " + this.bgColor);
    return this.bgColor;
  }
}

