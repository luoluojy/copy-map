import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { AppSettings } from './app-settings';
import { UserInfo } from './user-info';

/**
 * 应用全局配置服务
 */
@Injectable()
export class AppSettingsService {

  /**
   * 配置文件地址
   */
  // private appSettingsUrl = "assets/conf/appsettings.json";
  /**
   * 构造函数
   */
  constructor(private http: HttpClient) {
    // this._userInfo = new UserInfo();
  }

  // /**
  //  * 用户信息
  //  */
  // private _userInfo: UserInfo;
  // public get userInfo(): UserInfo {
  //   return this._userInfo;
  // }
  // public set userInfo(value: UserInfo) {
  //   this._userInfo = value;
  // }

  // /**
  //  * 应用程序设置
  //  */
  // private _settings: AppSettings;
  // public get settings(): AppSettings {
  //   return this._settings;
  // }
  // public set settings(value: AppSettings) {
  //   this._settings = value;
  // }
  // /**
  //  * 初始化应用配置
  //  */
  // public async initAppSettings() {
  //    this.getAppSettings()
  //     .then(
  //       appsettings =>{
  //         this._settings = appsettings
  //       });
  // }
  /**
   * 获取配置文件
   */
  public  async getAppSettings(url:string): Promise<AppSettings> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return await this.http.get<AppSettings>(url, { headers }).toPromise();
  }

}
