import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettingService } from '../../app-setting.service';
import { AppCommandService } from '../../app-command.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  /**
   * 构造函数
   * @param appSetting
   * @param appCommands
   * @param elementRef
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService,
    private elementRef: ElementRef) {

    this.appCommands.menuBar = this;
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
