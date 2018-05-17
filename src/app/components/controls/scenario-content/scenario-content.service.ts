import { Injectable } from '@angular/core';
import { ScenarioContentComponent } from './scenario-content.component';
import { AppSettingsService } from '../../../services/app-settings.service';

@Injectable()
export class ScenarioContentService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
