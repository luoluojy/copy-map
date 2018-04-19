import { Injectable } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';
import { MenuComponent } from './menu.component';
import { AppInfo } from '../../services/app-info';

/**
 *
 */
@Injectable()
export class MenuService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: MenuComponent;
  public get owner(): MenuComponent {
    return this._owner;
  }
  public set owner(value: MenuComponent) {
    this._owner = value;
  }

  /**
   * 应用标题
   */
  public get appInfo(): AppInfo {
    console.log(this.appSettings.settings.appInfo);
    return this.appSettings.settings.appInfo;
  }
}
