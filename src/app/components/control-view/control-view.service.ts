import { Injectable } from '@angular/core';
import { ControlViewComponent } from './control-view.component';
import { AppSettingService } from '../../app-setting.service';
import { ControlViewStatus } from './control-view-status.enum';

/**
 * 控制视图组件服务
 */
@Injectable()
export class ControlViewService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) {
    this.actionStatus = ControlViewStatus.ProjectContent
  }

  /**
   * 服务所属的组件
   */
  private _owner: ControlViewComponent;
  public get owner(): ControlViewComponent {
    return this._owner;
  }
  public set owner(value: ControlViewComponent) {
    this._owner = value;
  }
  /**
   * 控件功能状态
   */
  private _actionStatus: ControlViewStatus;
  public get actionStatus(): ControlViewStatus {
    return this._actionStatus;
  }
  public set actionStatus(value: ControlViewStatus) {
    this._actionStatus = value;
    if (this._owner != undefined) {
      this._owner.actionStatus = value;
    }
  }
  /**
   * 活动功能标题
   */
  public get actionTile(): string {
    switch (this.actionStatus) {
      case ControlViewStatus.NewProject:
        return "新建项目";

      case ControlViewStatus.OpenProject:
        return "打开项目";

      case ControlViewStatus.SaveProject:
        return "保存项目";

      case ControlViewStatus.MaintainProject:
        return "项目管理";

      case ControlViewStatus.ProjectContent:
        return "项目详情";

      case ControlViewStatus.DataResource:
        return "数据查询";

      case ControlViewStatus.AnalysisTask:
        return "数据分析";

      default:
        return "";
    }
  }

  /**
   * 新建项目命令
   * @param param
   */
  public newProjectCommand(param?: any) {
    this.actionStatus = ControlViewStatus.NewProject;
  }
  /**
   * 打开项目命令
   * @param param
   */
  public openProjectCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.OpenProject;
  }
  /**
   * 保存项目命令
   * @param param
   */
  public saveProjectCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.SaveProject;
  }
  /**
   * 维护项目命令
   * @param param
   */
  public maintainProjectCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.MaintainProject;
  }
  /**
   * 项目内容命令
   * @param param
   */
  public projectContentCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.ProjectContent;
  }
  /**
   * 数据资源查询命令
   */
  public dataResourceCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.DataResource;
  }
  /**
   * 分析任务构建命令
   */
  public analysisTaskCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.AnalysisTask;
  }

}
