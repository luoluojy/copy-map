import { Injectable } from '@angular/core';
import { AppSettingsService } from './services/app-settings.service';
import { AppComponent } from './app.component';
import { AppStatus } from './app-status.enum';

/**
 *
 */
@Injectable()
export class AppService {

  /**
   * 构造函数
   * @param appSettings
   */
  constructor(private appSettings: AppSettingsService) { }

  /**
   * 服务所属的组件
   */
  private _owner: AppComponent;
  public get owner(): AppComponent {
    return this._owner;
  }
  public set owner(value: AppComponent) {
    this._owner = value;
  }

  /**
   * 应用程序状态
   */
  private _appStatus: AppStatus = AppStatus.Ready;
  public get appStatus(): AppStatus {
    return this._appStatus;
  }
  public set appStatus(value: AppStatus) {
    this._appStatus = value;
  }
  /**
   *
   */
  public get isMenuBarVisible(): boolean {
    return this.appStatus == AppStatus.Ready;
  }
  /**
   *
   */
  public get isMenuVisible(): boolean {
    return this.appStatus == AppStatus.Order;
  }
  /**
   *
   */
  public get isConrolViewVisible(): boolean {
    return this.appStatus == AppStatus.Operation;
  }
  /**
   *
   */
  private _isDataViewVisible: boolean = false;
  public get isDataViewVisible(): boolean {
    return this._isDataViewVisible;
  }
  public set isDataViewVisible(value: boolean) {
    this._isDataViewVisible = value;
  }

  /**
   * 初始化应用配置
   */
  public initAppSettings() {
    this.appSettings.initAppSettings();
  }

  /**
   * 打开功能菜单
   * @param param
   */
  public enterOrderCommand(param?: any) {
    this.appStatus = AppStatus.Order;
  }
  /**
   * 关闭功能菜单
   * @param param
   */
  public enterReadyCommand(param?: any) {
    this.appStatus = AppStatus.Ready;
  }
  /**
   * 进入功能操作
   * @param param
   */
  public enterOperationCommand(param?: any) {
    this.appStatus = AppStatus.Operation;
  }
  /**
   * 展开数据视图
   * @param param
   */
  public collapseDataViewCommand(param?: any) {
    this.isDataViewVisible = param;
  }

}
