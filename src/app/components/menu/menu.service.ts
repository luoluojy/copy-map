import { Injectable } from '@angular/core';
import { Workspace } from '../../services/workspace';
import { MenuComponent } from './menu.component';
import { AppInfo } from '../../services/app-info';

/**
 * 菜单组件服务
 */
@Injectable()
export class MenuService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

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
    if (this.workspace.appsettings == undefined) {
      return undefined;
    }
    return this.workspace.appsettings.appInfo;
  }
}
