import { Injectable } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';
import { MenuBarComponent } from './menu-bar.component';

/**
 *
 */
@Injectable()
export class MenuBarService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: MenuBarComponent;
  public get owner(): MenuBarComponent {
    return this._owner;
  }
  public set owner(value: MenuBarComponent) {
    this._owner = value;
  }

}
