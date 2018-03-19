import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseSearchContainerAction, CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from '../../common/action';

@Directive({
  selector: '[appSearchContainerWatch]'
})
export class SearchContainerWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      let elem: any = document.querySelector('#search-container');
      let collapse: any = document.querySelector('#collapse');
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      let footer = <HTMLElement>document.querySelector('footer');
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footer_span = <HTMLElement>document.querySelector('footer > span');
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      if (state.searchContainerOpened) {
        // 打开侧边导航栏
        collapse.style.width = "20px";
        elem.style.width = "400px";
        let store = this.store;
        console.log(parseInt(footerLeft.substr(0, footerLeft.length - 2), 10));
        if (parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) == 0) {

          distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 400 + 'px'
          footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 400 + 'px'
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

            let flag = false;
            for (; i < elems.length; i++) {
              if (e.target == search || e.target == input) { break; }
              if (e.target == btn) { flag = true; break; }
              if ((e.target == elems[i] && searchContainerState) || e.target == el) {
                break;
              }
            }
            if ((elems.length != 0) && ((i == elems.length && searchContainerState) || flag)) {
              let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
              let footerLeft = window.getComputedStyle(footer, null).left;
              let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
              distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 400 + 'px';
              footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 400 + 'px';
              store.dispatch(new CloseSearchContainerAction());
            }

          }
        }, 100)
      } else {
        elem.style.width = "0px";
      }
    })
  }

}
