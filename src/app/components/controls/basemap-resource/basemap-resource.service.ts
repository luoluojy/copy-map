import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { BasemapResourceComponent } from './basemap-resource.component';

/**
 *
 */
@Injectable()
export class BasemapResourceService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

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
