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
        elem.style.width = "100px";
        elem.style.height= "200px";
        elem.style.backgroundColor="white";

        let store = this.store;
        let toolsState = state.toolsOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#tools');
            if (e.target !== el && toolsState) {
              store.dispatch(new CloseToolsAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: any = document.querySelector('#tools');
        elem.style.width = "0px";
        elem.style.height= "0px";

      }
    })
  }

}
