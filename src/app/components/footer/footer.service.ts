import { Injectable } from '@angular/core';
import { Workspace } from '../../services/workspace';
import { FooterComponent } from './footer.component';
import { AppInfo } from '../../services/app-info';

/**
 * 脚注组件服务
 */
@Injectable()
export class FooterService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

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
   * 应用系统标题
   */
  public get appInfo(): AppInfo {
    if (this.workspace.appsettings == undefined)
    {
        return undefined;
    }
    return this.workspace.appsettings.appInfo;
  }

}
