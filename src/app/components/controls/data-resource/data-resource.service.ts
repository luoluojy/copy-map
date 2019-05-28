import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { DataResourceComponent } from './data-resource.component';

/**
 * 数据资源管理组件服务
 */
@Injectable()
export class DataResourceService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: DataResourceComponent;
  public get owner(): DataResourceComponent {
    return this._owner;
  }
  public set owner(value: DataResourceComponent) {
    this._owner = value;
  }

}
