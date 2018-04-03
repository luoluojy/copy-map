import { Injectable } from '@angular/core';

/**
 * 应用全局配置服务
 */
@Injectable()
export class AppSettingService {

  constructor() { }

  /**
   * 系统设置参数
   */
  private _setting = {
    appTile: "Spatial Analysis",
    actionTile: "新建项目",

    seafileUrl: "http://58.213.133.181:7774/",
  }
  public get Setting() {
    return this._setting;
  }
  public set Setting(value) {
    this.mergeSetting(value);
  }

  /**
   * 应用程序标题
   */
  public get appTile(): string {
    return this._setting.appTile;
  }
  public set appTile(value: string) {
    this._setting.appTile = value;
  }
  /**
   * 活动功能标题
   */
  public get actionTile(): string {
    return this._setting.actionTile;
  }
  public set actionTile(value: string) {
    this._setting.actionTile = value;
  }


  /**
   * seafile服务器配置地址
   */
  public get seafileUrl(): string {
    return this._setting.seafileUrl;
  }
  public set seafileUrl(value: string) {
    this._setting.seafileUrl = value;
  }


  /**
   * 更新配置文件
   */
  public mergeSetting(json) {
    for (var key in json) {
      this._setting[key] = json[key];
    }
  }

}
