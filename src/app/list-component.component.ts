import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'list-component',
  template: `
    <h4>{{this.outputData}}</h4>
    <ul>
      <li *ngFor="let item of items; let i = index" upper mycolor (someEvent)="showItemColor($event)">{{item}} - (Index: {{i}})</li>
    </ul>
  `,
  inputs: ['items']

})
export class ListComponentComponent implements OnInit {
  @Output() internalEmitter:EventEmitter<string>;

  constructor() {
    this.internalEmitter = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  private outputData:string;

  showItemColor(color) {
    this.outputData = "Your choice color = " + color;
    this.internalEmitter.emit(color);
  }

}
