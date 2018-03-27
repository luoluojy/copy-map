import { Component, OnInit, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { delay } from 'rxjs/operators'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import 'rxjs/add/observable/fromEvent'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data-view.',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
  animations: [
    trigger('displayFlagState', [
      state('false', style({
        display: 'none'
      })),
      state('true', style({
        display: ''
      })),
      transition('false => true', animate('200ms ease-in')),
      transition('true => false', animate('200ms ease-out')),
    ])
  ]
})
export class DataViewComponent implements OnInit, AfterViewInit,OnChanges {

  nativeElement: any;
  
  @Input() displayFlagState: string;
  @Input() actionFlag :boolean;
  constructor(private elementRef: ElementRef) {
    this.displayFlagState = 'false';
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    let viewerContainer: any = this.nativeElement.querySelector('#viewer-container');
    viewerContainer.style.width = document.body.clientWidth + 'px';
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['actionFlag']){
      this.actionFlag=changes['actionFlag'].currentValue;
      let expandDiv = this.nativeElement.querySelector('.viewer-detail')
      if(this.actionFlag){
        expandDiv.style.marginLeft="1380px"
      }else{
        expandDiv.style.marginLeft="1790px"
      }
    }
  }

  ngAfterViewInit() {
    let viewerDetails = this.nativeElement.getElementsByClassName('viewer-detail');
    let expand = viewerDetails[viewerDetails.length - 1];
    
    Observable.fromEvent(expand, 'click').subscribe((event: any) => {
      if (this.displayFlagState.search('false') != -1) {
        this.displayFlagState = 'true';
        let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
        let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
        let compassBottom = window.getComputedStyle(compass, null).bottom
        let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 180 + 'px';
        compass.style.bottom = newCompassBottom;
        let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
        let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 180 + 'px';
        navigation_controls.style.bottom = newNavigationControlsBottom;
      } else if (this.displayFlagState.search('true') != -1) {
        this.displayFlagState = 'false';
        let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
        let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
        let compassBottom = window.getComputedStyle(compass, null).bottom
        let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) - 180 + 'px';
        compass.style.bottom = newCompassBottom;
        let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
        let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) - 180 + 'px';
        navigation_controls.style.bottom = newNavigationControlsBottom;
      }

    })
  }
}
