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
export class DataViewComponent implements OnInit, AfterViewInit {

  nativeElement: any;
  
  @Input() displayFlagState: string;
  constructor(private elementRef: ElementRef) {
    this.displayFlagState = 'false';
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    let viewerContainer: any = this.nativeElement.querySelector('#viewer-container');
    viewerContainer.style.width = document.body.clientWidth + 'px';
  }

  ngAfterViewInit() {}
}
