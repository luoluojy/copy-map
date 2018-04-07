import { Injectable } from '@angular/core';
import { AppSettingService } from '../../app-setting.service';
import { DataViewComponent } from './data-view.component';

/**
 *
 */
@Injectable()
export class DataViewService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: DataViewComponent;
  public get owner(): DataViewComponent {
    return this._owner;
  }
  public set owner(value: DataViewComponent) {
    this._owner = value;
  }

}
