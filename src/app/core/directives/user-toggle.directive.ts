import { Directive, Input, HostListener,ElementRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import {
  OpenUserAction,
  CloseBottomContainerAction, CloseMapsAction, CloseToolsAction, CloseUserAction,
  CloseNoticeContainerAction, CloseRegionContainerAction, CloseSearchContainerAction,
  CloseSidenavAction
}
  from '../../common/action';
@Directive({
  selector: '[appUserToggle]'
})
export class UserToggleDirective {

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
    if (!this.userState) {
      if(this.bottomContainerState){this.store.dispatch(new CloseBottomContainerAction());}
      if(this.toolsState){this.store.dispatch(new CloseToolsAction());}
      if(this.mapsState){this.store.dispatch(new CloseMapsAction());}
      if(this.sidenavState){this.store.dispatch(new CloseSidenavAction());}
      if(this.searchContainerState){this.store.dispatch(new CloseSearchContainerAction());}
      if(this.regionContainerState){this.store.dispatch(new CloseRegionContainerAction());}
      if(this.noticeContainerState){this.store.dispatch(new CloseNoticeContainerAction());}

      this.store.dispatch(new OpenUserAction());
      mapDiv.style.color="#0C88E8";
    } else {
      mapDiv.style.color="#9A9A9A";
      this.store.dispatch(new CloseUserAction());
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