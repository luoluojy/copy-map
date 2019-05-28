import { Injectable } from '@angular/core';
import { AppCommand } from './app-command.enum';
import { AppService } from './app.service';
import { ContentViewService } from './components/content-view/content-view.service';
import { ControlViewService } from './components/control-view/control-view.service';
import { DataViewService } from './components/data-view/data-view.service';
import { FooterService } from './components/footer/footer.service';
import { MapViewService } from './components/map-view/map-view.service';
import { MenuBarService } from './components/menu-bar/menu-bar.service';
import { MenuService } from './components/menu/menu.service';
import { ToolBarService } from './components/tool-bar/tool-bar.service';
import { CloudStorageService } from './services/cloud-storage.service';

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
    private menuService: MenuService,
    private cloudStorageService:CloudStorageService
  ) { }

  /**
   * 执行命令
   * @param command 命名指令
   * @param param 命令参数
   */
  public execute(command: AppCommand, param?: any) {
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
    "EnterOrderCommand": (param?: any) => {
      this.appService.enterOrderCommand(param);
    },
    "ExitOrderCommand": (param?: any) => {
      this.appService.exitOrderCommand(param);
    },
    "EnterReadyCommand": (param?: any) => {
      this.appService.enterReadyCommand(param);
    },
    "EnterOperationCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
    },
    "CollapseDataViewCommand": (param?: any) => {
      this.appService.collapseDataViewCommand(param);
    },
    "NewScenarioCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.newScenarioCommand(param);
    },
    "OpenScenarioCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.openScenarioCommand(param);
    },
    "SaveScenarioCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.saveScenarioCommand(param);
    },
    "MaintainScenarioCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.maintainScenarioCommand(param);
    },
    "ScenarioContentCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.scenarioContentCommand(param);
    },
    "DataResourceCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.dataResourceCommand(param);
    },
    "AnalysisTaskCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.analysisTaskCommand(param);
    },
    "BasemapResourceCommand": (param?: any) => {
      this.appService.enterOperationCommand(param);
      this.controlViewService.basemapResourceCommand(param);
    },
    "CloseDataViewCommand": (param?: any) => {
      this.dataViewService.closeDataViewCommand(param)
    },
    "MaxDataViewCommand": (param?: any) => {
      this.dataViewService.maxDataViewCommand(param)
    },
    "MinDataViewCommand": (param?: any) => {
      this.dataViewService.minDataViewCommand(param)
    },
    "CloseTabpageCommand": (param?: any) => {
      this.dataViewService.closeTabpageCommand(param)
    },
    "ResizeDataViewCommand":(param?:any)=>{
      this.dataViewService.resizeDataViewCommand(param);
    },
    "LoginCommand":(param?:any)=>{
      this.cloudStorageService.loginCommand(param['login'],param['password'])
    },
    "listLibraryEntitiesCommand": (param?:any)=>{
      this.cloudStorageService.listLibraryEntitiesCommand()
    }
  };


}


