import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { OpenScenarioComponent } from './open-scenario.component';

/**
 * 打开场景组件服务
 */
@Injectable()
export class OpenScenarioService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: OpenScenarioComponent;
  public get owner(): OpenScenarioComponent {
    return this._owner;
  }
  public set owner(value: OpenScenarioComponent) {
    this._owner = value;
  }

}
