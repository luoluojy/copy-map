import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { InitCesiumService } from './services/init-cesium.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    InitCesiumService,
  ]
})
export class AppComponent implements OnInit {

  constructor(private elementRef: ElementRef, private initCesiumService: InitCesiumService) { }

  ngOnInit() {
    this.initCesiumService.initCesium();
    this.blurElements();
  }
  shown: boolean = false;
  actionShown: boolean = false;
  topShown: boolean = false;
  viewState: boolean = false;
  rightState: string;
  recShown(event) {
    this.shown = event;
    this.actionShown = !this.shown
  }
  recActionShown(event){
    this.actionShown = event;
  }
  recViewState(event) {
    this.viewState = event;
  }
  recRightState(event) {
    console.log(11111, event)
    this.rightState = event
  }

  blurElements() {
    let elements = document.querySelectorAll('.unfocus');
    for (let i = 0; i < elements.length; i++) {
      let element = <HTMLElement>elements[i];
      element.onfocus = function () {
        element.blur();
      }
    }
  }

}
