import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { MapViewService } from './components/map-view/map-view.service';
import { ControlViewService } from './components/control-view/control-view.service';
import { DataViewService } from './components/data-view/data-view.service';
import { ContentViewService } from './components/content-view/content-view.service';
import { FooterService } from './components/footer/footer.service';
import { MenuBarService } from './components/menu-bar/menu-bar.service';
import { ToolBarService } from './components/tool-bar/tool-bar.service';
import { MenuService } from './components/menu/menu.service';
import { AppCommand } from './app-command.enum';

/**
 * 应用命令服务
 */
@Injectable()
export class AppCommandService {

  /**
   * 构造函数
   */
  constructor(
    private appService: AppService,
    private mapViewService: MapViewService,
    private controlViewService: ControlViewService,
    private dataViewService: DataViewService,
    private contentViewService: ContentViewService,
    private footerService: FooterService,
    private menuBarService: MenuBarService,
    private toolBarService: ToolBarService,
    private menuService: MenuService
  ) { }

  /**
   * 执行命令
   * @param command 命名指令
   * @param param 命令参数
   */
  public executeCommand(command: AppCommand, param?: any) {
    var key: string = AppCommand[command];
    var func = this._commands[key];
    if (func != undefined) {
      func(param);
    }
  }
  /**
   * 命令列表
   */
  private _commands: { [key: string]: any; } = {
    "NewProject": (param?: any) => {
      this.controlViewService.newProjectCommand(param);
    },
    "OpenProject": (param?: any) => {
      this.controlViewService.openProjectCommand(param);
    },
    "SaveProject": (param?: any) => {
      this.controlViewService.saveProjectCommand(param);
    },
    "MaintainProject": (param?: any) => {
      this.controlViewService.maintainProjectCommand(param);
    },
    "ProjectContent": (param?: any) => {
      this.controlViewService.projectContentCommand(param);
    },
    "DataResource": (param?: any) => {
      this.controlViewService.dataResourceCommand(param);
    },
    "AnalysisTask": (param?: any) => {
      this.controlViewService.analysisTaskCommand(param);
    },
    "BasemapResource": (param?: any) => {
      this.controlViewService.basemapResourceCommand(param);
    },
  };


}


