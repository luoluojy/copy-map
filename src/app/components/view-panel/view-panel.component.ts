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
  selector: 'app-view-panel.',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.css'],
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
    ]),
    trigger('rightState', [
      state('-1', style({
        left:'0'
      })),
      state('0', style({
        left: '410px',
      })),
      transition('-1 => 0', animate('200ms ease-in')),
      transition('0 => -1', animate('200ms ease-out')),
    ])
  ]
})
export class ViewPanelComponent implements OnInit, AfterViewInit, OnChanges {

  nativeElement: any;
  @Input() displayFlagState: string;
  constructor(private elementRef: ElementRef) {
    this.flag='-1';
    this.displayFlagState = 'false';
    this.nativeElement = this.elementRef.nativeElement;
  }

  @Input() flag:string;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['flag'],4444444444444)
    if(changes['flag']){if(changes['flag'].currentValue=='-1'){
      this.flag = '-1'; 
    }else{
      this.flag = '0'; 
    }
  }}
@Output() flagEmitter:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit() {
    let viewerContainer: any = this.nativeElement.querySelector('#viewer-container');
    viewerContainer.style.width = document.body.clientWidth + 'px';
  }

  ngAfterViewInit() {
    let viewerDetails = this.nativeElement.getElementsByClassName('viewer-detail');
    let expand = viewerDetails[viewerDetails.length - 1];
    Observable.fromEvent(expand, 'click').subscribe((event: any) => {
      if (this.displayFlagState.search('false')!=-1) {
        this.displayFlagState = 'true';
        this.flagEmitter.emit('true');
        let compass = <HTMLElement>document.getElementsByClassName('compass')[0];
        let navigation_controls = <HTMLElement>document.getElementsByClassName('navigation-controls')[0];
        let compassBottom = window.getComputedStyle(compass, null).bottom
        let newCompassBottom = parseInt(compassBottom.substr(0, compassBottom.length - 2), 10) + 180 + 'px';
        compass.style.bottom = newCompassBottom;
        let navigationControlsBottom = window.getComputedStyle(navigation_controls, null).bottom
        let newNavigationControlsBottom = parseInt(navigationControlsBottom.substr(0, navigationControlsBottom.length - 2), 10) + 180 + 'px';
        navigation_controls.style.bottom = newNavigationControlsBottom;
      } else if(this.displayFlagState.search('true')!=-1) {
        this.displayFlagState = 'false';
        this.flagEmitter.emit('false');
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
