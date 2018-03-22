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
      if (state.sidenavOpened) {
        // 打开侧边导航栏
        elem.style.width = "320px";
        elem.style.zIndex = "1023";
        elem.style.height = document.body.clientHeight + 'px'
        elem2.style.height = document.body.clientHeight + 'px'
        elem2.style.width = document.body.clientWidth + 'px'
        elem2.style.backgroundColor = "white";
        elem2.style.opacity = "0.3";
        elem2.style.zIndex = "3";
        let store = this.store;
        let sidenavState = state.sidenavOpened;
        let elemref = this.elementRef;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('section');
            let btn = el.querySelector('button i');
            let elems = elemref.nativeElement.getElementsByTagName('*');
            let i = 0;
            let flag = false;
            for (; i < elems.length; i++) {
              if (e.target == btn) { flag = true; break; }
              if ((e.target == elems[i] && sidenavState) || e.target == el) {
                break;
              }
            }
            if ((i == elems.length && sidenavState) || flag) {

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
