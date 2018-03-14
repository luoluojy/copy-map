import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseBottomContainerAction } from '../../common/action';

@Directive({
  selector: '[appBottomContainerWatch]'
})
export class BottomContainerWatchDirective {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {

      let expand = <HTMLElement>document.getElementById('dataview');
      let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
      let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
      if (state.bottomContainerOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#bottom-container');
        elem.style.width = document.body.clientWidth + 'px';
        elem.style.height = "180px";
        elem.style.backgroundColor = "white";

        let expandBottom = window.getComputedStyle(expand, null).bottom
        let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) + 220 + 'px';
        expand.style.bottom = newExpandBottom;

        let compassBottom = window.getComputedStyle(compass, null).bottom
        let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 220 + 'px';
        compass.style.bottom = newCompassBottom;
        let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
        let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 220 + 'px';
        navigation_controls.style.bottom = newNavigationControlsBottom;

        let store = this.store;
        let bottomContainerState = state.bottomContainerOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#bottom-container');
            if (e.target !== el && bottomContainerState) {
              store.dispatch(new CloseBottomContainerAction());
            }
          }
        }, 100)
      } else {
        document.onclick = null;
        let elem: any = document.querySelector('#bottom-container');
        elem.style.width = "0px";
        elem.style.height = "0px";
        let expandBottom = window.getComputedStyle(expand, null).bottom;
        if (parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 200 > 0) {
          let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 220 + 'px';
          expand.style.bottom = newExpandBottom;

          let compassBottom = window.getComputedStyle(compass, null).bottom
          let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 220 + 'px';
          compass.style.bottom = newCompassBottom;
          let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
          let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 220 + 'px';
          navigation_controls.style.bottom = newNavigationControlsBottom;

        }
      }
    })
  }
}
