import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenBottomContainerAction,CloseBottomContainerAction, CloseMapsAction,CloseToolsAction,CloseUserAction } from '../../common/action';

@Directive({
  selector: '[appBottomContainerToggle]'
})
export class BottomContainerToggleDirective {

  bottomContainerState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.bottomContainerState) {
      this.store.dispatch(new CloseUserAction());
      this.store.dispatch(new CloseToolsAction());
      this.store.dispatch(new CloseMapsAction());
      this.store.dispatch(new OpenBottomContainerAction());
    } else {
      this.store.dispatch(new CloseBottomContainerAction());
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.bottomContainerState = state.bottomContainerOpened;
    })
  }
}
