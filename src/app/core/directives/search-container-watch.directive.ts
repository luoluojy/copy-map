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
      if (state.searchContainerOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#search-container');
        elem.style.width = "400px";
        elem.style.zIndex ="2"
        let store = this.store;
        let searchContainerState = state.searchContainerOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#search-container');
            if (e.target !== el && searchContainerState) {
              store.dispatch(new CloseSearchContainerAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: any = document.querySelector('#search-container');
        elem.style.width = "0px"
      }
    })
  }

}
