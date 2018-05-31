import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { MaintainScenarioComponent } from './maintain-scenario.component';

/**
 * 场景维护管理组件服务
 */
@Injectable()
export class MaintainScenarioService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: MaintainScenarioComponent;
  public get owner(): MaintainScenarioComponent {
    return this._owner;
  }
  public set owner(value: MaintainScenarioComponent) {
    this._owner = value;
  }

}
