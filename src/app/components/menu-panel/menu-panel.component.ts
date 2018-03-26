import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output, Input } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

}
