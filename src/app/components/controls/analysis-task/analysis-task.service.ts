import { Injectable } from '@angular/core';
import { AppSettingService } from '../../../app-setting.service';
import { AnalysisTaskComponent } from './analysis-task.component';

@Injectable()
export class AnalysisTaskService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: AnalysisTaskComponent;
  public get owner(): AnalysisTaskComponent {
    return this._owner;
  }
  public set owner(value: AnalysisTaskComponent) {
    this._owner = value;
  }

}
