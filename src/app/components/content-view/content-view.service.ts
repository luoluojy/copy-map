import { Injectable } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';
import { ContentViewComponent } from './content-view.component';

@Injectable()
export class ContentViewService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: ContentViewComponent;
  public get owner(): ContentViewComponent {
    return this._owner;
  }
  public set owner(value: ContentViewComponent) {
    this._owner = value;
  }
}
