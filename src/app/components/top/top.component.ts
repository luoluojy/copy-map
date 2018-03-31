import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  @Input() collapseShown: boolean = false;
  @Input() viewShown: boolean = false;
  @Output() viewEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() collapseEmitter: EventEmitter<true> = new EventEmitter<true>();


  constructor() { }

  ngOnInit() {}

  expandDataView(){
    let expand = document.getElementById('expand');
    let expandBottom = window.getComputedStyle(expand, null).bottom
    if (this.viewShown == false) {
      this.viewShown = true;
      let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) + 180 + 'px';
      expand.style.bottom = newExpandBottom;
      let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
      let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
      let compassBottom = window.getComputedStyle(compass, null).bottom
      let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 180 + 'px';
      compass.style.bottom = newCompassBottom;
      let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
      let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 180 + 'px';
      navigation_controls.style.bottom = newNavigationControlsBottom;
    } else if (this.viewShown = true) {
      this.viewShown = false;

      let newExpandBottom = parseInt(expandBottom.substr(0, expandBottom.length - 2), 10) - 180 + 'px';
      expand.style.bottom = newExpandBottom;
      let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
      let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
      let compassBottom = window.getComputedStyle(compass, null).bottom
      let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 180 + 'px';
      compass.style.bottom = newCompassBottom;
      let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
      let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 180 + 'px';
      navigation_controls.style.bottom = newNavigationControlsBottom;
    }
    this.viewEmitter.emit(this.viewShown);

  }
  collapse(elem) {
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    let collapseLeft = window.getComputedStyle(elem, null).left;
    let icon = elem.querySelector('i');
    if (collapseLeft != '0px') {
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
      elem.style.left = "0px";
      this.menuEmitter.emit(false);
      icon.setAttribute('class', 'fas fa-caret-right fa-lg')
    } else {
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
      elem.style.left = "410px";
      this.menuEmitter.emit(true)
      icon.setAttribute('class', 'fas fa-caret-left fa-lg')
    }
    this.collapseEmitter.emit(true);

  }

}
