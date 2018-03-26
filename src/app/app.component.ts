import { Component, OnInit, ElementRef } from '@angular/core';

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
  
  constructor(private elementRef: ElementRef, private initCesiumService: InitCesiumService) {}
  
  ngOnInit() {
    this.initCesiumService.initCesium();
    this.blurElements();
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
