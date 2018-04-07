import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { NewProjectComponent } from './new-project.component';

@Injectable()
export class NewProjectService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: NewProjectComponent;
  public get owner(): NewProjectComponent {
    return this._owner;
  }
  public set owner(value: NewProjectComponent) {
    this._owner = value;
  }

}
