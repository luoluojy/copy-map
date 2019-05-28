import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { ScenarioContentComponent } from './scenario-content.component';

/**
 * 场景内容管理组件服务
 */
@Injectable()
export class ScenarioContentService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: ScenarioContentComponent;
  public get owner(): ScenarioContentComponent {
    return this._owner;
  }
  public set owner(value: ScenarioContentComponent) {
    this._owner = value;
  }

}
