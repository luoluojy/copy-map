import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../common/reducer';

import { OpenSearchContainerAction,CloseSidenavAction } from '../../../common/action';
import { ActionComponent } from '../../../core/components/action/action.component'
import * as OpenedActions from '../../../common/action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  panel: HTMLElement;

  constructor(private elementRef: ElementRef, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.panel = this.elementRef.nativeElement.children[0];
  }

  initClickEvent() {
    let closeBtn = this.panel.querySelector('button');
    let closeIcon = this.panel.querySelector('i');
    closeBtn.addEventListener('click', (e) => {
      this.store.dispatch(new CloseSidenavAction());
    });
    closeIcon.addEventListener('click', () => {
      this.store.dispatch(new CloseSidenavAction());
    });
    
  }
  tests(){
    this.store.dispatch(new CloseSidenavAction());
    this.store.dispatch(new OpenSearchContainerAction())
  }
  
flag:number=-1;
  showView(flag){
    this.flag=flag;
    this.store.dispatch(new OpenedActions.CloseSidenavAction());
  }

  recFlag(event){
    this.flag=event;
  }



}
