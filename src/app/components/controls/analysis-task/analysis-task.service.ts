import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { AnalysisTaskComponent } from './analysis-task.component';

/**
 * 分析任务管理组件服务
 */
@Injectable()
export class AnalysisTaskService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

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
