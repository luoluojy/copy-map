import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }

  flag: boolean = false;
  nativeElement: any;
  @Output() flagContentEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  checkFlag() {
    this.flagContentEmitter.emit(this.flag);
  }
  ngOnInit() {
    this.nativeElement = this.elementRef.nativeElement;
    let icons = this.nativeElement.querySelectorAll('.project-icon')

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
