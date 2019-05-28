import { Injectable } from '@angular/core';
import { MapViewComponent } from './map-view.component';
import { Workspace } from '../../services/workspace';

/**
 * 地图视图组件服务
 */
@Injectable()
export class MapViewService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: MapViewComponent;
  public get owner(): MapViewComponent {
    return this._owner;
  }
  public set owner(value: MapViewComponent) {
    this._owner = value;
  }

}
