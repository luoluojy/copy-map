import { Injectable } from '@angular/core';
import { AppSettingService } from '../../app-setting.service';
import { FooterComponent } from './footer.component';

/**
 *
 */
@Injectable()
export class FooterService {

  /**
   * 构造函数
   * @param appSetting
   */
  constructor(private appSetting: AppSettingService) { }

  /**
   * 服务所属的组件
   */
  private _owner: FooterComponent;
  public get owner(): FooterComponent {
    return this._owner;
  }
  public set owner(value: FooterComponent) {
    this._owner = value;
  }

}
