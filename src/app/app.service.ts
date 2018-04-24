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
    this._preAppStatus = this._appStatus;
    this._appStatus = value;
    switch (value) {
      case AppStatus.Ready:
        this.owner.outerDrawer.close();
        this.owner.innerDrawer.close();
        break;
      case AppStatus.Order:
        this.owner.outerDrawer.open();
        this.owner.innerDrawer.close();
        break;
      case AppStatus.Operation:
        this.owner.outerDrawer.close();
        this.owner.innerDrawer.open();
        break;
    }
  }
  /**
   * 应用程序先前状态
   */
  private _preAppStatus: AppStatus = AppStatus.Ready;
  public get preAppStatus(): AppStatus {
    return this._preAppStatus;
  }
  /**
   * 是否处于准备状态
   */
  public get isReadyStatus(): boolean {
    return this.appStatus == AppStatus.Ready;
  }
  /**
   * 是否处于待命状态
   */
  public get isOrderStatus(): boolean {
    return this.appStatus == AppStatus.Order;
  }
  /**
   * 是否处于操作状态
   */
  public get isOperationStatus(): boolean {
    return this.appStatus == AppStatus.Operation;
  }
  /**
   * 数据视图状态
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
   * 进入待命状态
   * @param param
   */
  public enterOrderCommand(param?: any) {
    this.appStatus = AppStatus.Order;
  }
  /**
   * 退出待命状态
   * @param param
   */
  public exitOrderCommand(param?: any) {
    this.appStatus = this.preAppStatus;
  }
  /**
   * 进入准备状态
   * @param param
   */
  public enterReadyCommand(param?: any) {
    this.appStatus = AppStatus.Ready;
  }
  /**
   * 进入操作状态
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
