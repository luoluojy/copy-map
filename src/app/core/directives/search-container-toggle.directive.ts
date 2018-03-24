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
      if (this.sidenavState) {
        this.store.dispatch(new CloseSidenavAction());

      }
      if (this.bottomContainerState) { this.store.dispatch(new CloseBottomContainerAction()); }
      if (this.regionContainerState) { this.store.dispatch(new CloseRegionContainerAction()); }
      if (this.noticeContainerState) { this.store.dispatch(new CloseNoticeContainerAction()); }

      this.store.dispatch(new OpenSearchContainerAction());
      this.store.dispatch(new OpenBottomContainerAction());
    } else {
      let serachContent = document.getElementById('search-container').querySelector('h3');
      serachContent.innerText = Math.random().toString();

    }
    // let collapse: HTMLElement = <HTMLElement>document.querySelector('#collapse');
    // let navBar = document.getElementById('nav-bar');
    // let navBarWidth = window.getComputedStyle(navBar, null).width;
    // let searchContainer = document.getElementById('search-container');
    // let bottomContainer = document.getElementById('bottom-container');
    // let searchContainerWidth = window.getComputedStyle(searchContainer, null).width;

    // let collapseIcon: HTMLElement = <HTMLElement>collapse.querySelector('i');
    // collapse.addEventListener('click', () => {
    //   let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    //   let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    //   let footer = <HTMLElement>document.querySelector('#footer');
    //   let footerLeft = window.getComputedStyle(footer, null).left;
    //   let footer_span = <HTMLElement>document.querySelector('#footer > span');
    //   let footerSpanLeft = window.getComputedStyle(footer_span, null).left;

      
    //   let expand = <HTMLElement>document.getElementById('dataview');
    //   let expandHV: any = expand.querySelectorAll('div');
    //   for (let i = 0; i < expandHV.length - 1; i++) {
    //     expandHV[i].style.display = 'inline-block'
    //   }
    //   let expandIcon = expand.querySelectorAll('i')[2];
    //   let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
    //   let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
    //   let expandBottom = window.getComputedStyle(expand, null).bottom;
    //   if (navBar.style.width != "0px") {
    //     navBar.style.width = "0px"
    //     searchContainer.style.width = "0px";
    //     collapse.style.left = "0px";
    //     collapseIcon.setAttribute('class', 'fas fa-caret-right fa-lg')
    //     bottomContainer.style.height = "0px"
    //     distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 480 + 'px';
    //     footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) - 480 + 'px';
        
    //   if (parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 190 + 15 > 0) {
    //     let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 190 + 15 + 'px';
    //     expand.style.bottom = newExpandBottom;
    //     expandIcon.setAttribute('class', 'fas fa-angle-double-up');
    //     let compassBottom = window.getComputedStyle(compass, null).bottom
    //     let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 190 + 15 + 'px';
    //     compass.style.bottom = newCompassBottom;
    //     let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
    //     let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 190 + 15 + 'px';
    //     navigation_controls.style.bottom = newNavigationControlsBottom;
    //   }
    //   } else {
    //     navBar.style.width = navBarWidth
    //     searchContainer.style.width = searchContainerWidth;
    //     collapse.style.left = "480px";
    //     collapseIcon.setAttribute('class', 'fas fa-caret-left fa-lg')
    //     bottomContainer.style.height = "180px";
    //     bottomContainer.style.width = document.body.clientWidth + 'px';
    //     bottomContainer.style.left = '480px';
    //     distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 480 + 'px';
    //     footer.style.left = parseInt(footerLeft.substr(0, footerLeft.length - 2), 10) + 480 + 'px'
    //     expandIcon.setAttribute('class', 'fas fa-angle-double-down');
    //     let expandBottom = window.getComputedStyle(expand, null).bottom
    //     let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) + 190 - 15 + 'px';
    //     expand.style.bottom = newExpandBottom;

    //     let compassBottom = window.getComputedStyle(compass, null).bottom
    //     let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 190 - 15 + 'px';
    //     compass.style.bottom = newCompassBottom;
    //     let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
    //     let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 190 - 15 + 'px';
    //     navigation_controls.style.bottom = newNavigationControlsBottom;

    //   }

    // })
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
