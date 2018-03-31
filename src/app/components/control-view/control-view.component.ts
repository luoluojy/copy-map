import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-control-view',
  templateUrl: './control-view.component.html',
  styleUrls: ['./control-view.component.css']
})
export class ControlViewComponent implements OnInit {

  constructor() { }
  @Output() actionCloseEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();

  @Output() actionMenuEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() menuBarEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  ngOnInit() {}

  closeControlView(){

    this.actionCloseEmitter.emit(false);
    this.menuBarEmitter.emit(true)

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }

  reOpenMenu(){

    this.actionMenuEmitter.emit(true);
    this.actionCloseEmitter.emit(false);
  
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }
}
