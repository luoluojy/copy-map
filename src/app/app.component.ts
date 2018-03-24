import { Component, OnInit, ElementRef } from '@angular/core';

import { InitCesiumService } from './services/init-cesium.service';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from './common/reducer';

import * as OpenedActions from './common/action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';
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
  bottomContainerState: boolean;
  sidenavState: boolean;
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  searchContainerState: boolean;
  regionContainerState: boolean;
  noticeContainerState: boolean;
  constructor(private elementRef: ElementRef, private initCesiumService: InitCesiumService, private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.bottomContainerState = state.bottomContainerOpened;
      this.mapsState = state.mapsOpened;
      this.noticeContainerState = state.noticeContainerOpened;
      this.regionContainerState = state.regionContainerOpened;
      this.searchContainerState = state.searchContainerOpened;
      this.sidenavState = state.sidenavOpened;
      this.toolsState = state.toolsOpened;
      this.userState = state.userOpened;
    })
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

  initRegionClick(event) {
    let mapBars = document.getElementsByClassName('map-bar');
    let regions = mapBars[0];
    if (this.mapsState) { this.store.dispatch(new OpenedActions.CloseMapsAction); }
    if (!this.regionContainerState) {
      this.store.dispatch(new OpenedActions.OpenRegionContainerAction());
      let panel = document.getElementById('region-container');
      document.onclick = (ee: any) => {
        if (!panel.contains(ee.target) && !event.target.contains(ee.target)) {
          this.store.dispatch(new OpenedActions.CloseRegionContainerAction());
          document.onclick = null;
        }
      }
    } else if (this.regionContainerState) {
      this.store.dispatch(new OpenedActions.CloseRegionContainerAction());
    }
  }


  initMapsClick(event) {
    let mapBars = document.getElementsByClassName('map-bar');
    let maps = mapBars[1];

    if (this.regionContainerState) { this.store.dispatch(new OpenedActions.CloseRegionContainerAction); }
    if (!this.mapsState) {
      this.store.dispatch(new OpenedActions.OpenMapsAction());
      let panel = document.getElementById('maps');
      document.onclick = (ee: any) => {
        if (!panel.contains(ee.target) && !event.target.contains(ee.target)) {
          this.store.dispatch(new OpenedActions.CloseMapsAction());
          document.onclick = null;
        }
      }
    } else if (this.mapsState) {
      this.store.dispatch(new OpenedActions.CloseMapsAction());
    }
  }
  
  flag: string='-1';
  recFlag(event) {
    Observable.create((observer) => {
      observer.next();
    }).delay(0)
      .subscribe(
        () => {
          this.flag = event;
        })
  }
bottomFlag:string ='false'
  recBottomFlag(event){
    console.log(event);
    this.bottomFlag = event;
  }

}
