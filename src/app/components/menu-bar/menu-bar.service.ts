import { Injectable } from '@angular/core';
import { Workspace } from '../../services/workspace';
import { MenuBarComponent } from './menu-bar.component';

/**
 * 菜单栏组件服务
 */
@Injectable()
export class MenuBarService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

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
