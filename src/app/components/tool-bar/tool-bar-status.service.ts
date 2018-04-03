import { Injectable } from '@angular/core';
import { ToolBarStatus } from './tool-bar-status.enum';

/**
 * 工具栏状态服务
 */
@Injectable()
export class ToolBarStatusService {
  /**
   * 构造函数
   */
  constructor() {
    this._action = ToolBarStatus.None;
  }

  /**
   * 工具栏当前活动状态
   */
  private _action;
  public get Action(): ToolBarStatus {
    return this._action;
  }
  public set Action(value: ToolBarStatus) {
    this._action = value;
  }

  /**
   * 定位菜单活动控制
   */
  public get isLocationsAction(): boolean {
    return this._action == ToolBarStatus.LocationAction;
  }
  public set isLocationsAction(value: boolean) {
    if (value) {
      this._action = ToolBarStatus.LocationAction;
    }
    else {
      this._action = ToolBarStatus.None;
    }
  }
  /**
   * 图册菜单活动控制
   */
  public get isAtlasAction(): boolean {
    return this._action == ToolBarStatus.AtlasAction;
  }
  public set isAtlasAction(value: boolean) {
    if (value) {
      this._action = ToolBarStatus.AtlasAction;
    }
    else {
      this._action = ToolBarStatus.None;
    }
  }
  /**
   * 工具菜单活动控制
   */
  public get isUtilAction(): boolean {
    return this._action == ToolBarStatus.UtilAction;
  }
  public set isUtilAction(value: boolean) {
    if (value) {
      this._action = ToolBarStatus.UtilAction;
    }
    else {
      this._action = ToolBarStatus.None;
    }
  }
  /**
   * 通知菜单活动控制
   */
  public get isNoticeAction(): boolean {
    return this._action == ToolBarStatus.NoticeAction;
  }
  public set isNoticeAction(value: boolean) {
    if (value) {
      this._action = ToolBarStatus.NoticeAction;
    }
    else {
      this._action = ToolBarStatus.None;
    }
  }
  /**
   * 用户菜单活动控制
   */
  public get isUserAction(): boolean {
    return this._action == ToolBarStatus.UserAction;
  }
  public set isUserAction(value: boolean) {
    if (value) {
      this._action = ToolBarStatus.UserAction;
    }
    else {
      this._action = ToolBarStatus.None;
    }
  }

}
