import { Component, OnInit } from '@angular/core';

import { InitCesiumService } from './services/init-cesium.service';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from './common/reducer';

import { CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from './common/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    InitCesiumService,
  ]
})
export class AppComponent implements OnInit {

  constructor(private initCesiumService: InitCesiumService, private store: Store<AppState>) {

  }
  
  ngOnInit() {
    this.initCesiumService.initCesium();
    this.blurElements()
  }

  blurElements(){
    let elements = document.querySelectorAll('.unfocus');
    for (let i = 0; i < elements.length; i++) {
      let element = <HTMLElement>elements[i];
      element.onfocus = function () { 
        element.blur(); 
      }
    }
  }
}
