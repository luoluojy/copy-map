import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { InitCesiumService } from './services/init-cesium.service';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from './common/reducer';

import {
  OpenRegionContainerAction, OpenMapsAction,
  OpenToolsAction, CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction, CloseSearchContainerAction
  , CloseBottomContainerAction
} from './common/action';

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
    Observable.fromEvent(document.getElementById('close'), 'click').subscribe(() => {
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let footer = <HTMLElement>document.querySelector('#footer');
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footer_span = <HTMLElement>document.querySelector('#footer > span');
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 480 + 'px';
      footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 480 + 'px';
      
  let collapse: HTMLElement = <HTMLElement>document.querySelector('#collapse');
  collapse.style.display = "none";
  
      this.store.dispatch(new CloseSearchContainerAction());
      this.store.dispatch(new CloseBottomContainerAction())
    
  });
 
    this.registerCollapse();
}
registerCollapse(){
  let collapse: HTMLElement = <HTMLElement>document.querySelector('#collapse');
      
      let navBar = document.getElementById('nav-bar');
      
      let navBarWidth = window.getComputedStyle(navBar, null).width;
      console.log(navBar.offsetWidth);
      let bottomContainer = document.getElementById('bottom-container');
      let searchContainer = document.getElementById('search-container');
      let collapseIcon: HTMLElement = <HTMLElement>collapse.querySelector('i');
      collapse.addEventListener('click', () => {
        let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
        let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
        let footer = <HTMLElement>document.querySelector('#footer');
        let footerLeft = window.getComputedStyle(footer, null).left;
        let footer_span = <HTMLElement>document.querySelector('#footer > span');
        let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
  
        
        let expand = <HTMLElement>document.getElementById('dataview');
        let expandHV: any = expand.querySelectorAll('div');
        for (let i = 0; i < expandHV.length - 1; i++) {
          expandHV[i].style.display = 'inline-block'
        }
        let expandIcon = expand.querySelectorAll('i')[2];
        let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
        let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
        let expandBottom = window.getComputedStyle(expand, null).bottom;
        if (navBar.style.width != "0px") {
          navBar.style.width = "0px"
          searchContainer.style.width = "0px";
          collapse.style.left = "0px";
          collapseIcon.setAttribute('class', 'fas fa-caret-right fa-lg')
          bottomContainer.style.height = "0px"
          distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 480 + 'px';
          footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 480 + 'px';
          
        if (parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 190 + 15 > 0) {
          let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 190 + 15 + 'px';
          expand.style.bottom = newExpandBottom;
          expandIcon.setAttribute('class', 'fas fa-angle-double-up');
          let compassBottom = window.getComputedStyle(compass, null).bottom
          let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 190 + 15 + 'px';
          compass.style.bottom = newCompassBottom;
          let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
          let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 190 + 15 + 'px';
          navigation_controls.style.bottom = newNavigationControlsBottom;
        }
        } else {
          navBar.style.width = navBarWidth
          searchContainer.style.width = '480px';
          collapse.style.left = "480px";
          collapseIcon.setAttribute('class', 'fas fa-caret-left fa-lg')
          bottomContainer.style.height = "180px";
          bottomContainer.style.width = document.body.clientWidth + 'px';
          bottomContainer.style.left = '480px';
          distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 480 + 'px';
          footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 480 + 'px'
          expandIcon.setAttribute('class', 'fas fa-angle-double-down');
          let expandBottom = window.getComputedStyle(expand, null).bottom
          let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) + 190 - 15 + 'px';
          expand.style.bottom = newExpandBottom;
  
          let compassBottom = window.getComputedStyle(compass, null).bottom
          let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 190 - 15 + 'px';
          compass.style.bottom = newCompassBottom;
          let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
          let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 190 - 15 + 'px';
          navigation_controls.style.bottom = newNavigationControlsBottom;
  
        }
  
      })
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
