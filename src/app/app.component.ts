import { Component, OnInit, ElementRef } from '@angular/core';

import { InitCesiumService } from './services/init-cesium.service';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from './common/reducer';

import { OpenRegionContainerAction, OpenMapsAction, OpenToolsAction,CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from './common/action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/fromEvent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    InitCesiumService,
  ]
})
export class AppComponent implements OnInit {

  constructor(private elementRef: ElementRef, private initCesiumService: InitCesiumService, private store: Store<AppState>) {

  }
  cesiumContainer: HTMLElement;
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
