import { Directive, Input, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../common/reducer';
import {
  OpenSearchContainerAction, OpenBottomContainerAction,
  CloseBottomContainerAction, CloseMapsAction, CloseToolsAction, CloseUserAction,
  CloseNoticeContainerAction, CloseRegionContainerAction, CloseSearchContainerAction,
  CloseSidenavAction
}
  from '../../common/action';


@Directive({
  selector: '[appSearchContainerToggle]'
})
export class SearchContainerToggleDirective {


  bottomContainerState: boolean;
  sidenavState: boolean;
  toolsState: boolean;
  mapsState: boolean;
  userState: boolean;
  searchContainerState: boolean;
  regionContainerState: boolean;
  noticeContainerState: boolean;

  @HostListener('click', ['$event']) onClick(e) {
    if (!this.searchContainerState) {
      let mapDivs: any = document.querySelectorAll('.map-bar');
      for (let i = 0; i < mapDivs.length; i++) {
        let is = mapDivs[i].getElementsByTagName("i");
        mapDivs[i].style.color = "#9A9A9A";
        is[1].setAttribute("class", "fas fa-angle-down  fa-lg");
      }
      if (this.userState) { this.store.dispatch(new CloseUserAction()); }
      if (this.toolsState) { this.store.dispatch(new CloseToolsAction()); }
      if (this.mapsState) { this.store.dispatch(new CloseMapsAction()); }
      if (this.sidenavState) { this.store.dispatch(new CloseSidenavAction()); }
      if (this.bottomContainerState) { this.store.dispatch(new CloseBottomContainerAction()); }
      if (this.regionContainerState) { this.store.dispatch(new CloseRegionContainerAction()); }
      if (this.noticeContainerState) { this.store.dispatch(new CloseNoticeContainerAction()); }

      this.store.dispatch(new OpenSearchContainerAction());
      this.store.dispatch(new OpenBottomContainerAction());
    } else {
      let serachContent = document.getElementById('search-container').querySelector('h3');
      serachContent.innerText = Math.random().toString();
  
    }
    let collapse: HTMLElement = <HTMLElement>document.querySelector('#collapse');
    let navBar = document.getElementById('nav-bar');
    let navBarWidth = window.getComputedStyle(navBar, null).width;
    let searchContainer = document.getElementById('search-container');
    let bottomContainer = document.getElementById('bottom-container');
    let searchContainerWidth = window.getComputedStyle(searchContainer, null).width;
    let closeicon = document.getElementById('closeicon');
    
    
           
    collapse.addEventListener('click', () => {
      
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    let footer = <HTMLElement>document.querySelector('#footer');
    let footerLeft = window.getComputedStyle(footer, null).left;
    let footer_span = <HTMLElement>document.querySelector('#footer > span');
    let footerSpanLeft = window.getComputedStyle(footer_span, null).left;
      if(navBar.style.width != "0px"){
        navBar.style.width = "0px"
        searchContainer.style.width = "0px";
        closeicon.style.width = "0px";
        collapse.style.left="0px";
        bottomContainer.style.height="0px"
        distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 400 + 'px';
        footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 400 + 'px'
      }else{
        navBar.style.width = navBarWidth
        searchContainer.style.width = searchContainerWidth;
        closeicon.style.width = "20px";
        collapse.style.left="400px";
        bottomContainer.style.height="180px";
        bottomContainer.style.width = document.body.clientWidth + 'px';
        bottomContainer.style.left =  '400px';
        distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 400 + 'px';
        footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 400 + 'px'
        
      }
    
    })
  }

  constructor(private store: Store<AppState>) {
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
}
