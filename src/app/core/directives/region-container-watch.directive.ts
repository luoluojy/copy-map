import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseRegionContainerAction } from '../../common/action';

@Directive({
  selector: '[appRegionContainerWatch]'
})
export class RegionContainerWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      if (state.regionContainerOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#region-container');
        elem.style.height = "400px";
        elem.style.backgroundColor = "white";
        let store = this.store;
        let regionContainerState = state.regionContainerOpened;
        let elemref = this.elementRef;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#region-container');
            let elems = elemref.nativeElement.getElementsByTagName('*');
            let i = 0;
            for (; i < elems.length; i++) {
              if ((e.target == elems[i] && regionContainerState) || e.target == el) {
                break;
              }
            }

            if (i == elems.length && regionContainerState) {
              let mapDiv: any = document.querySelectorAll('.map-bar')[0];
              let is = mapDiv.getElementsByTagName("i");
              mapDiv.style.color = "#9A9A9A";
              is[1].setAttribute("class", "fas fa-angle-down  fa-lg")
              store.dispatch(new CloseRegionContainerAction());
            }
          }
        }, 100)
      } else {
        document.onclick = null;
        let elem: any = document.querySelector('#region-container');
       
        elem.style.height = "0px";
      }
    })
  }
}
