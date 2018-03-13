import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenMapsAction, CloseMapsAction,CloseToolsAction,CloseUserAction,CloseBottomContainerAction } from '../../common/action';

@Directive({
  selector: '[appMapsToggle]'
})
export class MapsToggleDirective {

  
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  bottomContainerState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.mapsState) {
      if(this.userState) {this.store.dispatch(new CloseUserAction());}
      if(this.toolsState) {this.store.dispatch(new CloseToolsAction());}
      if(this.bottomContainerState) {this.store.dispatch(new CloseBottomContainerAction());}
      this.store.dispatch(new OpenMapsAction());
    } else {
      this.store.dispatch(new CloseMapsAction());
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.toolsState = state.toolsOpened;
      this.mapsState = state.mapsOpened;
      this.userState = state.userOpened;
      this.bottomContainerState = state.bottomContainerOpened;
    })
  }
}
