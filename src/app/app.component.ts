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
  collapseShown:boolean=false;
  topShown: boolean = false;
  viewState: boolean = false;
  menuBarShown:boolean = true;
  recMenuBarState(event){
    this.menuBarShown = event;
  }

  rightState: string;
  recShown(event) {
    this.shown = event;
  }
  recActionShown(event){
    this.actionShown = event;
    this.collapseShown = event;
  }
  recViewState(event) {
    this.viewState = event;
  }
  recRightState(event) {
    this.rightState = event
  }
  recCollapseState(event){
    this.collapseShown = event
  }

  modalShown:boolean = false;
  recCreateProjectState(event){
    this.modalShown = event;
    if(event==0){
      this.flag=0;
    }
  }

  recModalShown(event){
    this.modalShown=event;
    this.shown=!event;
  }



  flag:number = -1;
  
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
