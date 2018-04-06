import { Injectable } from '@angular/core';
import { ControlViewComponent } from './components/control-view/control-view.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { AppCommand } from './app-command.enum';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { ContentViewComponent } from './components/content-view/content-view.component';

/**
 * 应用命令服务
 */
@Injectable()
export class AppCommandService {
  /**
   * 应用程序组件
   */
  private _appComponent: AppComponent;
  public get appComponent(): AppComponent {
    return this._appComponent;
  }
  public set appComponent(value: AppComponent) {
    this._appComponent = value;
  }
  /**
   * 控制视图组件
   */
  private _controlView: ControlViewComponent;
  public get controlView(): ControlViewComponent {
    return this._controlView;
  }
  public set controlView(value: ControlViewComponent) {
    this._controlView = value;
  }
  /**
   * 地图视图组件
   */
  private _mapView: MapViewComponent;
  public get mapView(): MapViewComponent {
    return this._mapView;
  }
  public set mapView(value: MapViewComponent) {
    this._mapView = value;
  }
  /**
   * 数据视图组件
   */
  private _dataView: DataViewComponent;
  public get dataView(): DataViewComponent {
    return this._dataView;
  }
  public set dataView(value: DataViewComponent) {
    this._dataView = value;
  }
  /**
   * 内容视图组件
   */
  private _contentView: ContentViewComponent;
  public get contentView(): ContentViewComponent {
    return this._contentView;
  }
  public set contentView(value: ContentViewComponent) {
    this._contentView = value;
  }
  /**
   * 菜单栏组件
   */
  private _menuBar: MenuBarComponent;
  public get menuBar(): MenuBarComponent {
    return this._menuBar;
  }
  public set menuBar(value: MenuBarComponent) {
    this._menuBar = value;
  }
  /**
   * 菜单组件
   */
  private _menu: MenuComponent;
  public get menu(): MenuComponent {
    return this._menu;
  }
  public set menu(value: MenuComponent) {
    this._menu = value;
  }
  /**
   * 工具栏组件
   */
  private _toolBar: ToolBarComponent;
  public get toolBar(): ToolBarComponent {
    return this._toolBar;
  }
  public set toolBar(value: ToolBarComponent) {
    this._toolBar = value;
  }
  /**
   * 页脚组件
   */
  private _footer: FooterComponent;
  public get footer(): FooterComponent {
    return this._footer;
  }
  public set footer(value: FooterComponent) {
    this._footer = value;
  }

  /**
   * 构造函数
   */
  constructor() { }

  /**
   * 执行命令
   * @param command 命名指令
   * @param param 命令参数
   */
  public executeCommand(command: AppCommand, param?: any) {

  }

}
