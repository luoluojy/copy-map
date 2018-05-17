import { Injectable } from '@angular/core';
import { MaintainScenarioComponent } from './maintain-scenario.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class MaintainScenarioService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
