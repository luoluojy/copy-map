import { Injectable } from '@angular/core';
import { AppSettingService } from '../../app-setting.service';
import { MenuComponent } from './menu.component';

/**
 *
 */
@Injectable()
export class MenuService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

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
  public get appTile(): string {
    return this.appSetting.appTile;
  }
  public set appTile(value: string) {
    this.appSetting.appTile = value;
  }

}
