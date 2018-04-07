import { Injectable } from '@angular/core';
import { AppSettingService } from './app-setting.service';
import { AppComponent } from './app.component';

/**
 *
 */
@Injectable()
export class AppService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: AppComponent;
  public get owner(): AppComponent {
    return this._owner;
  }
  public set owner(value: AppComponent) {
    this._owner = value;
  }

}
