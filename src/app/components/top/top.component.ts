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

  constructor() { }

  ngOnInit() {
    let expand = document.getElementById('expand');

    Observable.fromEvent(expand, 'click').subscribe((event: any) => {
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

    })
  }

}
