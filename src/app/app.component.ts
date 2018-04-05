import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { AppSettingService } from './app-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [

  ]
})
export class AppComponent implements OnInit {

  constructor(public appSetting: AppSettingService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.blurElements();
  }
  shown: boolean = false;
  actionShown: boolean = false;
  collapseShown: boolean = false;
  topShown: boolean = false;
  viewState: boolean = false;
  menuBarShown: boolean = true;
  recMenuBarState(event) {
    this.menuBarShown = event;
  }

  recShown(event) {
    this.shown = event;
  }
  recActionShown(event) {
    this.actionShown = event;
    this.collapseShown = event;
  }
  recViewState(event) {
    this.viewState = event;
  }

  recCollapseState(event) {
    this.collapseShown = event
  }

  modalShown: boolean = false;
  recCreateProjectState(event) {
    this.modalShown = event;
  }

  recModalShown(event) {
    this.modalShown = event;
    this.shown = !event;
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
