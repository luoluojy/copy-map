import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { DataResourceComponent } from './data-resource.component';

@Injectable()
export class DataResourceService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

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
