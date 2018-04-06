import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToolBarStatusService } from './tool-bar-status.service';
import { AppSettingService } from '../../app-setting.service';
import { AppCommandService } from '../../app-command.service';

/**
 * 工具栏组件
 */
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  /**
   * 构造函数
   * @param appSetting
   * @param appCommands
   * @param statusService
   */
  constructor(
    private appSetting: AppSettingService,
    private appCommands: AppCommandService,
    private statusService: ToolBarStatusService) {

    this.appCommands.toolBar = this;
  }

  /**
   * 定位栏活动状态
   */
  public get isLocationsAction() {
    return this.statusService.isLocationsAction;
  }
  public set isLocationsAction(value: boolean) {
    this.statusService.isLocationsAction = value;
  }
  /**
   * 图册栏活动状态
   */
  public get isAtlasAction() {
    return this.statusService.isAtlasAction;
  }
  public set isAtlasAction(value: boolean) {
    this.statusService.isAtlasAction = value;
  }
  /**
   * 地图工具活动状态
   */
  public get isUtilAction() {
    return this.statusService.isUtilAction;
  }
  public set isUtilAction(value: boolean) {
    this.statusService.isUtilAction = value;
  }
  /**
   * 通知火种状态
   */
  public get isNoticeAction() {
    return this.statusService.isNoticeAction;
  }
  public set isNoticeAction(value: boolean) {
    this.statusService.isNoticeAction = value;
  }
  /**
   * 用户中心活动状态
   */
  public get isUserAction() {
    return this.statusService.isUserAction;
  }
  public set isUserAction(value: boolean) {
    this.statusService.isUserAction = value;
  }

  ngOnInit() { }

  initLocationsClick() {
    this.statusService.isLocationsAction = !this.statusService.isLocationsAction;

  }

  initAtlasClick() {
    this.statusService.isAtlasAction = !this.statusService.isAtlasAction;

  }

  initToolsClick() {
    this.statusService.isUtilAction = !this.statusService.isUtilAction;

  }

  initNoticeClick() {
    this.statusService.isNoticeAction = !this.statusService.isNoticeAction;

  }

  initUserClick() {
    this.statusService.isUserAction = !this.statusService.isUserAction;

  }
}
