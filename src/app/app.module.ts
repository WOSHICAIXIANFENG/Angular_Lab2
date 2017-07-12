import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { Myvisibility2Directive } from './myvisibility2.directive';
import { Myvisibility3Directive } from './myvisibility3.directive';

import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    UpperDirective,
    MyvisibilityDirective,
    Myvisibility2Directive,
    Myvisibility3Directive,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
