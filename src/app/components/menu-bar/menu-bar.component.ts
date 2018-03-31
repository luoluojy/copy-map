import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Output() shownEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  @Output() rightEmitter:EventEmitter<string>=new EventEmitter<string>();
  @Output() menuBarEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  ngOnInit() {}

  openMenu(){
    this.shownEmitter.emit(true);
    this.menuBarEmitter.emit(false);
  
  }

}
