import { Directive, Input, HostListener, ElementRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import {
  OpenMapsAction,
  CloseBottomContainerAction, CloseMapsAction, CloseToolsAction, CloseUserAction,
  CloseNoticeContainerAction, CloseRegionContainerAction, CloseSearchContainerAction,
  CloseSidenavAction
}
  from '../../common/action';
@Directive({
  selector: '[appMapsToggle]'
})
export class MapsToggleDirective {

  bottomContainerState: boolean;
  sidenavState: boolean;
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  searchContainerState: boolean;
  regionContainerState: boolean;
  noticeContainerState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
      let mapDiv=this.elementRef.nativeElement;
      let is=mapDiv.getElementsByTagName("i");
    if (!this.mapsState) {
      let mapDivs: any = document.querySelectorAll('.map-bar');
      for(let i=0;i<mapDivs.length;i++){
        let is = mapDivs[i].getElementsByTagName("i");
        mapDivs[i].style.color = "#9A9A9A";
        is[1].setAttribute("class", "fas fa-angle-down  fa-lg");
      }
      if(this.userState){this.store.dispatch(new CloseUserAction());}
      if(this.toolsState){this.store.dispatch(new CloseToolsAction());}
      if(this.bottomContainerState){this.store.dispatch(new CloseBottomContainerAction());}
      if(this.sidenavState){this.store.dispatch(new CloseSidenavAction());}
      if(this.searchContainerState){this.store.dispatch(new CloseSearchContainerAction());}
      if(this.regionContainerState){this.store.dispatch(new CloseRegionContainerAction());}
      if(this.noticeContainerState){this.store.dispatch(new CloseNoticeContainerAction());}

      this.store.dispatch(new OpenMapsAction());
      mapDiv.style.color="#0C88E8";
      is[1].setAttribute("class","fas fa-angle-up  fa-lg")
    } else {
      mapDiv.style.color="#9A9A9A";
      is[1].setAttribute("class","fas fa-angle-down  fa-lg")
      this.store.dispatch(new CloseMapsAction());
    }
  }

  constructor(private elementRef:ElementRef,private store: Store<AppState>) {
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
