import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppSettingService } from '../../app-setting.service';
import { AppCommandService } from '../../app-command.service';

/**
 *
 */
@Component({
  selector: 'app-control-view',
  templateUrl: './control-view.component.html',
  styleUrls: ['./control-view.component.css']
})
export class ControlViewComponent implements OnInit {

  /**
   * 构造函数
   * @param appSetting
   * @param appCommands
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService) {

    this.appCommands.controlView = this;
  }

  @Output() actionCloseEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() actionMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() { }

  closeControlView() {

    this.actionCloseEmitter.emit(false);
    this.menuBarEmitter.emit(true)

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }

  reOpenMenu() {

    this.actionMenuEmitter.emit(true);
    this.actionCloseEmitter.emit(false);

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }
}
