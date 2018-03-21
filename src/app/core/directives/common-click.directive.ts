import { Directive, HostListener, ElementRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import * as OpenedActions from '../../common/action';

@Directive({
  selector: '[appCommonClick]'
})
export class CommonClickDirective {

  public states: boolean[] = [];

  bottomContainerState: boolean;
  sidenavState: boolean;
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  searchContainerState: boolean;
  regionContainerState: boolean;
  noticeContainerState: boolean;

  constructor(private elementRef: ElementRef, private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.bottomContainerState = state.bottomContainerOpened;
      this.mapsState = state.mapsOpened;
      this.noticeContainerState = state.noticeContainerOpened;
      this.regionContainerState = state.regionContainerOpened;
      this.searchContainerState = state.searchContainerOpened;
      this.sidenavState = state.sidenavOpened;
      this.toolsState = state.toolsOpened;
      this.userState = state.userOpened;
    })
  }

  @HostListener('click', ['$event']) onClick(event) {

    if (this.regionContainerState) {
      this.store.dispatch(new OpenedActions.CloseRegionContainerAction());
    }
    if (this.mapsState) {
      this.store.dispatch(new OpenedActions.CloseMapsAction());
    }
    if (this.toolsState) {
      this.store.dispatch(new OpenedActions.CloseToolsAction());
    }
    if (this.noticeContainerState) {
      this.store.dispatch(new OpenedActions.CloseNoticeContainerAction());
    }
    if (this.userState) {
      this.store.dispatch(new OpenedActions.CloseUserAction());
    }
    let nativeElement = this.elementRef.nativeElement;
    let mapBars = document.getElementsByClassName('map-bar');
    let regions = mapBars[0];
    let maps = mapBars[1];
    let tools = mapBars[2];
    let notice = document.getElementById('notice');
    let user = document.getElementById('user-center');

    if (nativeElement.contains(regions)) {
      this.store.dispatch(new OpenedActions.OpenRegionContainerAction());
    } else {if (nativeElement.contains(maps)) {
      this.store.dispatch(new OpenedActions.OpenMapsAction());
    } else if (nativeElement.contains(tools)) {
      this.store.dispatch(new OpenedActions.OpenToolsAction());
    } else if (nativeElement.contains(notice)) {
      this.store.dispatch(new OpenedActions.OpenNoticeContainerAction());
    } else if (nativeElement.contains(user)) {
      this.store.dispatch(new OpenedActions.OpenUserAction());
    }}

  }


}
