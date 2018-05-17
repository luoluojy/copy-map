import { Injectable } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';
import { FooterComponent } from './footer.component';
import { AppInfo } from '../../services/app-info';

/**
 *
 */
@Injectable()
export class FooterService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: FooterComponent;
  public get owner(): FooterComponent {
    return this._owner;
  }
  public set owner(value: FooterComponent) {
    this._owner = value;
  }

  /**
   * 应用标题
   */
  public get appInfo(): AppInfo {
    if (this.appSettings.settings == undefined)
    {
        return undefined;
    }
    return this.appSettings.settings.appInfo;
  }

}
