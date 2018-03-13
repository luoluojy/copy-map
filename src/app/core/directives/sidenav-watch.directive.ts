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
      if (state.sidenavOpened) {
        // 打开侧边导航栏
        let elem: HTMLElement = document.querySelector('section');
        elem.style.width = "400px";
        elem.style.zIndex ="1023"
        let elem2 = document.getElementById('test1');
        elem2.style.height = document.body.clientHeight + 'px'
        elem2.style.width = document.body.clientWidth + 'px'
        elem2.style.zIndex="10"
        elem2.style.backgroundColor="white";
        elem2.style.opacity="0.3" ;
        let store = this.store;
        let sidenavState = state.sidenavOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('section');
            if (e.target !== el && sidenavState) {
              store.dispatch(new CloseSidenavAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: HTMLElement = document.querySelector('section');
        elem.style.width = "0px"
        let elem2 = document.getElementById('test1');
        elem2.style.height = '0px'
        elem2.style.width = '0px'
        elem2.style.zIndex=""
        elem2.style.backgroundColor="";
        elem2.style.opacity=""
      }
    })
  }
}
