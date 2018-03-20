import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseSearchContainerAction, CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction, CloseBottomContainerAction } from '../../common/action';

@Directive({
  selector: '[appSearchContainerWatch]'
})
export class SearchContainerWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      let elem: any = document.querySelector('#search-container');
      let close = document.getElementById('close');
      let direction = document.getElementById('direction');
      let collapse: HTMLElement = <HTMLElement>document.querySelector('#collapse');
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      let footer = <HTMLElement>document.querySelector('#footer');
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footer_span = <HTMLElement>document.querySelector('#footer > span');
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      if (state.searchContainerOpened) {
        // 打开侧边导航栏
        direction.style.display="none"
        close.style.display="inline-block"
        collapse.style.width = "20px";
        elem.style.width = "480px";

        let store = this.store;
        if (parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) == 0) {

          distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 480 + 'px'
          footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 480 + 'px'
        }
        let searchContainerState = state.searchContainerOpened;
        let elemref = this.elementRef;

        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#search-container');
            let search = document.querySelector('#search i');
            let btn = el.querySelector('div i');
            let input = document.querySelector('#nav-bar input')
            let elems = elemref.nativeElement.getElementsByTagName('*');
            let i = 0;
            let closeicon = document.getElementById('close');
            let childcloseicon = closeicon.querySelector('i');

            if (e.target == closeicon || e.target == childcloseicon) {
              store.dispatch(new CloseSearchContainerAction());

              store.dispatch(new CloseBottomContainerAction());
            }
            if (searchContainerState &&(e.target == btn)) {
              let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
              let footerLeft = window.getComputedStyle(footer, null).left;
              let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
              distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 480 + 'px';
              footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 480 + 'px';
              store.dispatch(new CloseSearchContainerAction());
              let expand = <HTMLElement>document.getElementById('dataview');
              let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
              let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
              let expandBottom = window.getComputedStyle(expand, null).bottom;
              if (parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 200 > 0) {
                let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 190 + 'px';
                expand.style.bottom = newExpandBottom;

                let compassBottom = window.getComputedStyle(compass, null).bottom
                let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 190 + 'px';
                compass.style.bottom = newCompassBottom;
                let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
                let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 190 + 'px';
                navigation_controls.style.bottom = newNavigationControlsBottom;

              }
              store.dispatch(new CloseBottomContainerAction());
            }

          }
        }, 100)
      } else {
        elem.style.width = "0px";
        direction.style.display="inline-block"
        close.style.display="none"

      }
    })
  }

}
