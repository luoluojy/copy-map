import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { BasemapResourceComponent } from './basemap-resource.component';

/**
 * 地理地图管理组件服务
 */
@Injectable()
export class BasemapResourceService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: BasemapResourceComponent;
  public get owner(): BasemapResourceComponent {
    return this._owner;
  }
  public set owner(value: BasemapResourceComponent) {
    this._owner = value;
  }

}
