import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { SaveProjectComponent } from './save-project.component';

/**
 *
 */
@Injectable()
export class SaveProjectService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: SaveProjectComponent;
  public get owner(): SaveProjectComponent {
    return this._owner;
  }
  public set owner(value: SaveProjectComponent) {
    this._owner = value;
  }

}
