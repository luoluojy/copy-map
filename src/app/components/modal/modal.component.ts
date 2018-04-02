import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Output() modalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() createProjectEmitter: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {}

  closeDialog() {
    this.modalEmitter.emit(false)
  }

  createProject(){
    this.createProjectEmitter.emit(0);
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
  }

  returnMenu(){

    this.modalEmitter.emit(false)
  }
}
