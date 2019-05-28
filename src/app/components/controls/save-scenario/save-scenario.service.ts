import { Injectable } from '@angular/core';
import { Workspace } from '../../../services/workspace';
import { SaveScenarioComponent } from './save-scenario.component';

/**
 * 保存场景组件服务
 */
@Injectable()
export class SaveScenarioService {

  /**
   * 构造函数
   * @param workspace
   */
  constructor(private workspace: Workspace) { }

  /**
   * 服务所属的组件
   */
  private _owner: SaveScenarioComponent;
  public get owner(): SaveScenarioComponent {
    return this._owner;
  }
  public set owner(value: SaveScenarioComponent) {
    this._owner = value;
  }

}
