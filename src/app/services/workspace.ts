import { Injectable } from "@angular/core";
import { Scenario } from "@geomatrix/scenario";
import { AppSettings } from "./app-settings";
import { AppSettingsService } from "./app-settings.service";
import { Global_AppSettingsUrl } from "./global-config";
import { UserInfo } from "./user-info";

/**
 * 系统工作空间
 */
@Injectable()
export class Workspace {

  /**
   *
   * @param appsettingService 构造函数
   */
  constructor(
    private appSettingService: AppSettingsService
  ) {

  }

  /**
   * 用户信息
   */
  private _userInfo: UserInfo;
  public get userInfo(): UserInfo {
    return this._userInfo;
  }
  public set userInfo(value: UserInfo) {
    this._userInfo = value;
  }
  /**
   * 系统设置
   */
  private _appsettings: AppSettings;
  public get appsettings(): AppSettings {
    return this._appsettings;
  }
  public set appsettings(value: AppSettings) {
    this._appsettings = value;
  }
  /**
   * 当前场景
   */
  private _scenario: Scenario;
  public get scenario(): Scenario {
    return this._scenario;
  }
  public set scenario(value: Scenario) {
    this._scenario = value;
  }

  /*************** 初始化方法 ***********************/
  /**
   * 初始化系统配置
   */
  public initAppSettings() {
    this.appSettingService.getAppSettings(Global_AppSettingsUrl)
      .then(
        appsettings => {
          this._appsettings = appsettings
        });
  }
}
