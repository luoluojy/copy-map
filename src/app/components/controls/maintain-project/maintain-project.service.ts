import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { MaintainProjectComponent } from './maintain-project.component';

@Injectable()
export class MaintainProjectService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: MaintainProjectComponent;
  public get owner(): MaintainProjectComponent {
    return this._owner;
  }
  public set owner(value: MaintainProjectComponent) {
    this._owner = value;
  }

}
