import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Output() shownEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  @Output() rightEmitter:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit() {
    Observable.fromEvent(this.elementRef.nativeElement.querySelector('#menu'), 'click').subscribe(() => {
      this.shownEmitter.emit(true);
      this.rightEmitter.emit('0');
    })
  }

}
