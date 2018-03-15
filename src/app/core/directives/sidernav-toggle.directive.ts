import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenSidenavAction, CloseSidenavAction,CloseToolsAction,CloseUserAction,CloseMapsAction,CloseBottomContainerAction,CloseRegionContainerAction } from '../../common/action';

@Directive({
  selector: '[appSidernavToggle]'
})
export class SidernavToggleDirective {

  sidenavState: boolean;
  
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  bottomContainerState: boolean;
  regionContainerState:boolean;


  @HostListener('click', ['$event']) onClick(e) {
    if (!this.sidenavState) {
      if(this.toolsState) {this.store.dispatch(new CloseToolsAction());}
      if(this.userState){this.store.dispatch(new CloseUserAction());}
      if(this.mapsState){this.store.dispatch(new CloseMapsAction());}
      if(this.bottomContainerState){this.store.dispatch(new CloseBottomContainerAction());}
      if(this.regionContainerState) {this.store.dispatch(new CloseRegionContainerAction());}
      this.store.dispatch(new OpenSidenavAction());
    } else {
      this.store.dispatch(new CloseSidenavAction());
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.sidenavState = state.sidenavOpened;
      this.regionContainerState=state.regionContainerOpened;
      this.mapsState=state.mapsOpened;
      this.userState=state.userOpened;
      this.toolsState=state.toolsOpened;
    })
  }

}
