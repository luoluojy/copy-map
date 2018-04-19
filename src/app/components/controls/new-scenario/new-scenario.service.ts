import { Injectable } from '@angular/core';
import { NewScenarioComponent } from './new-scenario.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class NewScenarioService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
