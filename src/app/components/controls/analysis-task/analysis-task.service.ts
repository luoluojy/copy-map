import { Injectable } from '@angular/core';
import { AnalysisTaskComponent } from './analysis-task.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class AnalysisTaskService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
