import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from '../../common/action';
@Directive({
  selector: '[appSidenavWatch]'
})
export class SidenavWatchDirective implements OnInit {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      let elem: HTMLElement = document.querySelector('section');
      let elem2 = document.getElementById('overlay');
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      let footer = <HTMLElement>document.querySelector('footer');
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footer_span = <HTMLElement>document.querySelector('footer > span');
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      if (state.sidenavOpened) {
        // 打开侧边导航栏
        elem.style.width = "400px";
        elem.style.zIndex = "1023";
        elem.style.height = document.body.clientHeight + 'px'
        elem2.style.height = document.body.clientHeight + 'px'
        elem2.style.width = document.body.clientWidth + 'px'
        elem2.style.backgroundColor = "white";
        elem2.style.opacity = "0.3";
        elem2.style.zIndex = "10";
        distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 400 + 'px'
        footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 400 + 'px'
        let store = this.store;
        let sidenavState = state.sidenavOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('section');
            if (e.target !== el && sidenavState) {
              let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
              let footerLeft = window.getComputedStyle(footer, null).left;
              let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
              distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 400 + 'px';
              footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 400 + 'px'
              store.dispatch(new CloseSidenavAction());
            }
          }
        }, 100)
      } else {
        document.onclick = null;
        elem.style.width = "0px"
        elem2.style.height = '0px'
        elem2.style.width = '0px'
        elem2.style.zIndex = ""
        elem2.style.backgroundColor = "";
        elem2.style.opacity = "";
      }
    })
  }
}
