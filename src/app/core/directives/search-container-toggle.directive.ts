import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenMapsAction, OpenSearchContainerAction, CloseSearchContainerAction, CloseMapsAction,CloseToolsAction,CloseUserAction,CloseBottomContainerAction } from '../../common/action';

@Directive({
  selector: '[appSearchContainerToggle]'
})
export class SearchContainerToggleDirective {

  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  bottomContainerState: boolean;
  searchContainerState:boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.searchContainerState) {
      if(this.userState) {this.store.dispatch(new CloseUserAction());}
      if(this.mapsState) {this.store.dispatch(new CloseMapsAction());}
      if(this.bottomContainerState) {this.store.dispatch(new CloseBottomContainerAction());}
      this.store.dispatch(new OpenSearchContainerAction());
    } else {
      this.store.dispatch(new CloseSearchContainerAction());
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.toolsState = state.toolsOpened;
      this.mapsState = state.mapsOpened;
      this.userState = state.userOpened;
      this.bottomContainerState = state.bottomContainerOpened;
      this.searchContainerState = state.searchContainerOpened;
    })
  }
}
