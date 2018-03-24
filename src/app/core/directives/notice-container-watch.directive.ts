import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseNoticeContainerAction } from '../../common/action';
@Directive({
  selector: '[appNoticeContainerWatch]'
})
export class NoticeContainerWatchDirective {


  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      if (state.noticeContainerOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#notice-container');
        elem.style.width = "499px";
        elem.style.height= "468px";
        elem.style.backgroundColor="white";
        let store = this.store;
        let noticeContainerState = state.noticeContainerOpened;
        let elemref=this.elementRef;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#notice-container');
            let elems = elemref.nativeElement.getElementsByTagName('*');
            let i = 0;
            for (; i < elems.length; i++) {
              if ((e.target == elems[i] && noticeContainerState) || e.target == el) {
                break;
              }
            }

            if (i==elems.length && noticeContainerState) {
              store.dispatch(new CloseNoticeContainerAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: any = document.querySelector('#notice-container');
        elem.style.width = "0px";
        elem.style.height= "0px";
      }
    })
  }

}
