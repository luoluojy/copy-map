import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenUserAction, CloseUserAction, CloseMapsAction,CloseToolsAction,CloseBottomContainerAction  } from '../../common/action';
@Directive({
  selector: '[appUserToggle]'
})
export class UserToggleDirective {

  
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  bottomContainerState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.userState) {
      if(this.toolsState) {this.store.dispatch(new CloseToolsAction());}
      if(this.mapsState){this.store.dispatch(new CloseMapsAction());}
      if(this.bottomContainerState) {this.store.dispatch(new CloseBottomContainerAction());}
      this.store.dispatch(new OpenUserAction());
    } else {
      this.store.dispatch(new CloseUserAction());
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