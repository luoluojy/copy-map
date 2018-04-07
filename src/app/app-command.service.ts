import { Injectable } from '@angular/core';
import { AppCommand } from './app-command.enum';
import { AppService } from './app.service';
import { MapViewService } from './components/map-view/map-view.service';
import { ControlViewService } from './components/control-view/control-view.service';
import { DataViewService } from './components/data-view/data-view.service';
import { ContentViewService } from './components/content-view/content-view.service';
import { FooterService } from './components/footer/footer.service';
import { MenuBarService } from './components/menu-bar/menu-bar.service';
import { ToolBarService } from './components/tool-bar/tool-bar.service';
import { MenuService } from './components/menu/menu.service';

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
    switch (command) {
      case AppCommand.NewProject:
        this.controlViewService.newProjectCommand(param);
        break;
      case AppCommand.OpenProject:
        this.controlViewService.openProjectCommand(param);
        break;
      case AppCommand.MaintainProject:
        this.controlViewService.maintainProjectCommand(param);
        break;
      case AppCommand.ProjectContent:
        this.controlViewService.projectContentCommand(param)
        break;
    }
  }

}
