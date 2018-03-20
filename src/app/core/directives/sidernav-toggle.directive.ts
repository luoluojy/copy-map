import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import {
  OpenSidenavAction,
  CloseBottomContainerAction, CloseMapsAction, CloseToolsAction, CloseUserAction,
  CloseNoticeContainerAction, CloseRegionContainerAction, CloseSearchContainerAction,
  CloseSidenavAction
}
  from '../../common/action';

@Directive({
  selector: '[appSidernavToggle]'
})
export class SidernavToggleDirective {

  bottomContainerState: boolean;
  sidenavState: boolean;
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  searchContainerState: boolean;
  regionContainerState: boolean;
  noticeContainerState: boolean;


  @HostListener('click', ['$event']) onClick(e) {
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    let footer = <HTMLElement>document.querySelector('#footer');
    let footerLeft = window.getComputedStyle(footer, null).left;
    let footer_span = <HTMLElement>document.querySelector('#footer > span');
    let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
    if (!this.sidenavState) {
      let mapDivs: any = document.querySelectorAll('.map-bar');
      for(let i=0;i<mapDivs.length;i++){
        let is = mapDivs[i].getElementsByTagName("i");
        mapDivs[i].style.color = "#9A9A9A";
        is[1].setAttribute("class", "fas fa-angle-down  fa-lg");
      }
      if(this.userState){this.store.dispatch(new CloseUserAction());}
      if(this.toolsState){this.store.dispatch(new CloseToolsAction());}
      if(this.mapsState){this.store.dispatch(new CloseMapsAction());}
      if(this.bottomContainerState){this.store.dispatch(new CloseBottomContainerAction());}
      if(this.searchContainerState){this.store.dispatch(new CloseSearchContainerAction());}
      if(this.regionContainerState){this.store.dispatch(new CloseRegionContainerAction());}
      if(this.noticeContainerState){this.store.dispatch(new CloseNoticeContainerAction());}

      this.store.dispatch(new OpenSidenavAction());
    } else {       
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      let footerLeft = window.getComputedStyle(footer, null).left;
      let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 320 + 'px';
      footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 320 + 'px'
      this.store.dispatch(new CloseSidenavAction());

    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.bottomContainerState = state.bottomContainerOpened;
      this.mapsState=state.mapsOpened;
      this.noticeContainerState=state.noticeContainerOpened;
      this.regionContainerState=state.regionContainerOpened;
      this.searchContainerState=state.searchContainerOpened;
      this.sidenavState=state.sidenavOpened;
      this.toolsState=state.toolsOpened;
      this.userState=state.userOpened;
    })
  }

}
