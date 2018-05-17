import { Injectable } from '@angular/core';
import { ControlViewComponent } from './control-view.component';
import { AppSettingsService } from '../../services/app-settings.service';
import { ControlViewStatus } from './control-view-status.enum';

/**
 * 控制视图组件服务
 */
@Injectable()
export class ControlViewService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) {
    this.actionStatus = ControlViewStatus.ScenarioContent
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
    var key: string = ControlViewStatus[this.actionStatus];
    return this._tiles[key];
  }
  /**
   * 活动标题字典
   */
  private _tiles: { [key: string]: string; } = {
    "NewScenario": "新建场景",
    "OpenScenario": "打开场景",
    "SaveScenario": "保存场景",
    "MaintainScenario": "场景管理",
    "ScenarioContent": "场景详情",
    "DataResource": "数据查询",
    "AnalysisTask": "数据分析",
    "BasemapResource": "地理底图"
  };

  /**
   * 新建场景命令
   * @param param
   */
  public newScenarioCommand(param?: any) {
    this.actionStatus = ControlViewStatus.NewScenario;
  }
  /**
   * 打开场景命令
   * @param param
   */
  public openScenarioCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.OpenScenario;
  }
  /**
   * 保存场景命令
   * @param param
   */
  public saveScenarioCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.SaveScenario;
  }
  /**
   * 维护场景命令
   * @param param
   */
  public maintainScenarioCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.MaintainScenario;
  }
  /**
   * 场景内容命令
   * @param param
   */
  public scenarioContentCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.ScenarioContent;
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
  /**
   * 地理底图构建命令
   */
  public basemapResourceCommand(param?: any): any {
    this.actionStatus = ControlViewStatus.BasemapResource;
  }
}
