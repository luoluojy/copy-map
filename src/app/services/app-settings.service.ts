import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map, catchError } from 'rxjs/operators';

import { AppSettings } from './app-settings';
import { UserInfo } from './user-info';
import { AppInfoSettings } from '../../assets/conf/appsettings';

/**
 * 应用全局配置服务
 */
@Injectable()
export class AppSettingsService {

  /**
   * 配置文件地址
   */
  private appSettingsUrl = "assets/conf/appsettings.json";
  /**
   * 构造函数
   */
  constructor(private http: HttpClient) {
    this._userInfo = new UserInfo();
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
   * 应用程序设置
   */
  private _settings: any;
  public get settings(): AppSettings {
    return this._settings;
  }
  public set settings(value: AppSettings) {
    this._settings = value;
  }
  /**
   * 初始化应用配置
   */
  public async initAppSettings() {
    //  this.getAppSettings()
    //   .subscribe(
    //     appsettings =>{
    //       this._settings = appsettings
    //     });
    this._settings = AppInfoSettings;
  }
  /**
   * 获取配置文件
   */
  public  getAppSettings(): Observable<AppSettings> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<AppSettings>(this.appSettingsUrl, { headers });
  }

}
