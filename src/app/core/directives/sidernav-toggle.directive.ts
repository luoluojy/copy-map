import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import { OpenSidenavAction, CloseSidenavAction,CloseToolsAction,CloseUserAction,CloseMapsAction,CloseBottomContainerAction } from '../../common/action';

@Directive({
  selector: '[appSidernavToggle]'
})
export class SidernavToggleDirective {

  sidenavState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.sidenavState) {
      this.store.dispatch(new CloseToolsAction());
      this.store.dispatch(new CloseUserAction());
      this.store.dispatch(new CloseMapsAction());
      this.store.dispatch(new CloseBottomContainerAction());
      this.store.dispatch(new OpenSidenavAction());
    } else {
      this.store.dispatch(new CloseSidenavAction());
    }
  }

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('opened')).subscribe((state: AppState) => {
      this.sidenavState = state.sidenavOpened;
    })
  }

}
