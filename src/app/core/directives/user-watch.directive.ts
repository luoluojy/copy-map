import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseSidenavAction, CloseToolsAction, CloseMapsAction, CloseUserAction } from '../../common/action';
@Directive({
  selector: '[appUserWatch]'
})
export class UserWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      if (state.userOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#user');
        elem.style.width = "100px";
        elem.style.height= "200px";
        elem.style.backgroundColor="white";

        let store = this.store;
        let userState = state.userOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#user');
            if (e.target !== el && userState) {
              store.dispatch(new CloseUserAction());
            }
          }
        }, 100)
      } else {
        let elem: any = document.querySelector('#user');
        elem.style.width = "0px";
        elem.style.height= "0px";

      }
    })
  }

}
