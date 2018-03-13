import { Directive, Input, HostListener, ElementRef } from '@angular/core';

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
      let mapDiv=this.elementRef.nativeElement;
      let is=mapDiv.getElementsByTagName("i");
    if (!this.mapsState) {
      if(this.userState) {this.store.dispatch(new CloseUserAction());}
      if(this.toolsState) {this.store.dispatch(new CloseToolsAction());}
      if(this.bottomContainerState) {this.store.dispatch(new CloseBottomContainerAction());}
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
      this.toolsState = state.toolsOpened;
      this.mapsState = state.mapsOpened;
      this.userState = state.userOpened;
      this.bottomContainerState = state.bottomContainerOpened;
    })
  }
}
