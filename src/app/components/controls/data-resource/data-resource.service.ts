import { Injectable } from '@angular/core';
import { DataResourceComponent } from './data-resource.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class DataResourceService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
