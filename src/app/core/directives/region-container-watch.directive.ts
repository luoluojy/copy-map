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
        elem.style.width = "250px";
        elem.style.height= "200px";
        elem.style.backgroundColor="white";
        let store = this.store;
        let regionContainerState = state.regionContainerOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#region-container');
            if (e.target !== el && regionContainerState) {
              store.dispatch(new CloseRegionContainerAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: any = document.querySelector('#region-container');
        elem.style.width = "0px";
        elem.style.height= "0px";
      }
    })
  }
}
