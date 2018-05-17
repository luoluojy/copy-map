import { Injectable } from '@angular/core';
import { OpenScenarioComponent } from './open-scenario.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class OpenScenarioService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
