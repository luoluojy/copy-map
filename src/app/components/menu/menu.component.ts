import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef) { }
  @Input() shown;
  
  @Output() shownEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() createProjectEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnChanges(changes: SimpleChanges) {
    
  }
  checkShown() {
    this.shownEmitter.emit(false);
    this.actionEmitter.emit(true)
    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) + 410 + 'px'
  }
  clsoeMenu(){
    this.shownEmitter.emit(false);
    this.menuBarEmitter.emit(true);
  }


  createProject(){.0
    this.shownEmitter.emit(false);
    this.createProjectEmitter.emit(true);
  }
  ngOnInit() { }

}
