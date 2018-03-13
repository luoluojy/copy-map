import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';

import { CloseMapsAction } from '../../common/action';
@Directive({
  selector: '[appMapsWatch]'
})
export class MapsWatchDirective {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      if (state.mapsOpened) {
        // 打开侧边导航栏
        let elem: any = document.querySelector('#maps');
        elem.style.width = "100px";
        elem.style.height= "200px";
        elem.style.backgroundColor="white";
        let store = this.store;
        let mapsState = state.mapsOpened;
        setTimeout(function () {
          document.onclick = function (e) {
            let el = document.querySelector('#maps');
            if (e.target !== el && mapsState) {
              store.dispatch(new CloseMapsAction());
            }
          }
        }, 100)
      } else {
        document.onclick=null;
        let elem: any = document.querySelector('#maps');
        elem.style.width = "0px";
        elem.style.height= "0px";
      }
    })
  }
}
