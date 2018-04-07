import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuBarService } from './menu-bar.service';

/**
 *
 */
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: MenuBarService) {
    this.service.owner = this;
  }

  @Output() shownEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() rightEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() { }

  openMenu() {
    this.shownEmitter.emit(true);
    this.menuBarEmitter.emit(false);

  }

}
