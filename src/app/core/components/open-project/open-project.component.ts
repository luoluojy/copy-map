import { Component, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-open-project',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.css'],
  animations: [
    trigger('rightState', [
      state('false', style({
        position: 'absolute',
        top: '20px',
        right: '9px',
        color: 'white',
      })),
      state('true', style({
        display: '-webkit-box',
        width: '20px',
        height: '40px',
        backgroundColor: 'rgb(243, 243, 243)',
        position: 'absolute',
        top: '20px',
        left: '0',
        color: 'black',
        textAlign: 'center',
        webkitBoxPack: 'center',
        webkitBoxAlign: 'center',
      })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('0ms ease-out')),
    ])
  ]
})
export class OpenProjectComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  flag: boolean = false;
  rightState: string;

  hidden: boolean = false;
  checkHidden() {
    this.hidden = !this.hidden;
    console.log(this.hidden);
    this.rightState = this.hidden.toString();
    if (this.hidden) {
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px';
    } else {
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
    }
    this.flagOpenEmitter.emit(false);
    this.flagOpenEmitter.emit(true);
  }
  nativeElement: any;
  @Output() flagOpenEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  checkFlag() {
    console.log(this.flag);
    this.flagOpenEmitter.emit(this.flag);
  }

  ngOnInit() { }
  ngAfterViewInit() {
    this.nativeElement = this.elementRef.nativeElement;
    let icons = this.nativeElement.getElementsByClassName('project-icon')

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;

    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
    
    Observable.fromEvent(icons[0], 'click').subscribe(() => {
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px';
      this.checkFlag();
    })
  }

}
