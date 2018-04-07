import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { OpenlayersComponent } from './openlayers.component';

/**
 * Openlayers地图引擎服务
 */
@Injectable()
export class OpenlayersService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: OpenlayersComponent;
  public get owner(): OpenlayersComponent {
    return this._owner;
  }
  public set owner(value: OpenlayersComponent) {
    this._owner = value;
  }

}
