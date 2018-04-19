import { Injectable } from '@angular/core';
import { SaveScenarioComponent } from './save-scenario.component';
import { AppSettingsService } from '../../../services/app-settings.service';

/**
 *
 */
@Injectable()
export class SaveScenarioService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

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
