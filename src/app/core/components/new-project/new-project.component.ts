import { Component, OnInit, Input, ElementRef, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../common/reducer';
import * as OpenedActions from '../../../common/action';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef, private store: Store<AppState>) { }
  @Input() flagBottom: string = 'false';
  flag: boolean = false;
  nativeElement: any;
  @Output() flagNewEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  checkFlag() {
    this.flagNewEmitter.emit(this.flag);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['flagBottom'])
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
