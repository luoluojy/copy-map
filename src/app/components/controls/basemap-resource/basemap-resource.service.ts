import { Injectable } from '@angular/core';
import { BasemapResourceComponent } from './basemap-resource.component';
import { AppSettingsService } from '../../../services/app-settings.service';

/**
 *
 */
@Injectable()
export class BasemapResourceService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
