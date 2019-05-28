import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { NewScenarioComponent } from './new-scenario.component';

/**
 * 新建场景组件服务
 */
@Injectable()
export class NewScenarioService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: NewScenarioComponent;
  public get owner(): NewScenarioComponent {
    return this._owner;
  }
  public set owner(value: NewScenarioComponent) {
    this._owner = value;
  }

}
