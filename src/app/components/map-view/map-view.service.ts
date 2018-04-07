import { Injectable } from '@angular/core';
import { AppSettingService } from '../../app-setting.service';
import { MapViewComponent } from './map-view.component';

/**
 *
 */
@Injectable()
export class MapViewService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

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
