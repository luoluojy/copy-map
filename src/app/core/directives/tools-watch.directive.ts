import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from '../../common/action';
@Directive({
  selector: '[appToolsWatch]'
})
export class ToolsWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      if (state.toolsOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#tools');
        elem.style.height= "160px";
        elem.style.backgroundColor="white";

        let store = this.store;
        let toolsState = state.toolsOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#tools');
            if (e.target !== el && toolsState) {
              let mapDiv: any = document.querySelectorAll('.map-bar')[2];
              let is = mapDiv.getElementsByTagName("i");
              mapDiv.style.color = "#9A9A9A";
              is[1].setAttribute("class", "fas fa-angle-down  fa-lg")
              store.dispatch(new CloseToolsAction());
            }
          }
        }, 100)
      } else {
        let elem: any = document.querySelector('#tools');
        elem.style.height= "0px";
      }
    })
  }

}
