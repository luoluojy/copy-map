import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef) { }
  @Input() shown;
  @Input() viewState:string;
  @Output() shownEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() rightEmitter: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges) {
    this.shown = changes['shown'].currentValue;
    if(changes['viewState']){
      if(changes['viewState'].currentValue=='false'){
        this.rightEmitter.emit('-1')
      }else if(changes['viewState'].currentValue == 'true'){
        this.rightEmitter.emit('0');
      }
    }
  }
  checkShown() {
    this.shown = false;
    this.shownEmitter.emit(this.shown);
    this.rightEmitter.emit('-1')
  }
  ngOnInit() { }

}
