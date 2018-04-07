import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { ProjectContentComponent } from './project-content.component';

@Injectable()
export class ProjectContentService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: ProjectContentComponent;
  public get owner(): ProjectContentComponent {
    return this._owner;
  }
  public set owner(value: ProjectContentComponent) {
    this._owner = value;
  }

}
