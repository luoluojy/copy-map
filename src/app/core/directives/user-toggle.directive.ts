import { Directive, Input, HostListener,ElementRef } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenUserAction, CloseUserAction, CloseMapsAction,CloseToolsAction,CloseBottomContainerAction ,CloseRegionContainerAction } from '../../common/action';
@Directive({
  selector: '[appUserToggle]'
})
export class UserToggleDirective {

  
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  bottomContainerState: boolean;
  regionContainerState:boolean;
  @HostListener('click', ['$event']) onClick(e) {
      let mapDiv=this.elementRef.nativeElement;
    if (!this.userState) {
      if(this.toolsState) {this.store.dispatch(new CloseToolsAction());}
      if(this.mapsState){this.store.dispatch(new CloseMapsAction());}
      if(this.bottomContainerState) {this.store.dispatch(new CloseBottomContainerAction());}
      if(this.regionContainerState) {this.store.dispatch(new CloseRegionContainerAction());}
      this.store.dispatch(new OpenUserAction());
      mapDiv.style.color="#0C88E8";
    } else {
      mapDiv.style.color="#9A9A9A";
      this.store.dispatch(new CloseUserAction());
    }
  }

  constructor(private elementRef:ElementRef,private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.toolsState = state.toolsOpened;
      this.mapsState = state.mapsOpened;
      this.userState = state.userOpened;
      this.bottomContainerState = state.bottomContainerOpened;
      this.regionContainerState=state.regionContainerOpened;
    })
  }
}