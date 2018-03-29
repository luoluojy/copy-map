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
  ngOnInit() {
    let closeDiv = document.querySelectorAll('#action-close');
    let menuDiv = document.querySelectorAll('#action-menu');
    Observable.fromEvent(closeDiv,'click').subscribe(()=>{
      this.actionCloseEmitter.emit(false);
      this.menuBarEmitter.emit(true)

      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
    })
    Observable.fromEvent(menuDiv,'click').subscribe(()=>{
      this.actionMenuEmitter.emit(true);
      this.actionCloseEmitter.emit(false);
    
      let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
      let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
      distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
    })
  }

}
