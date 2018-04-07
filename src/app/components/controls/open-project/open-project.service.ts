import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { OpenProjectComponent } from './open-project.component';

@Injectable()
export class OpenProjectService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: OpenProjectComponent;
  public get owner(): OpenProjectComponent {
    return this._owner;
  }
  public set owner(value: OpenProjectComponent) {
    this._owner = value;
  }

}
