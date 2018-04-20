import { Component, OnInit, Inject, EventEmitter, Input } from '@angular/core';
import { MenuService } from './menu.service';
import { AppCommandService } from '../../app-command.service';
import { AppCommand } from '../../app-command.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * 菜单组件
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   * @param appCommands
   */
  constructor(private service: MenuService, private appCommands: AppCommandService) {
    this.service.owner = this;
  }

  ngOnInit() { }

  /**
   * 应用标题
   */
  public get appTitle(): string {
    return this.service.appInfo.title;
  }

  @Input() drawer:any;
  @Input() sidenav:any;

  onCloseClick() {
    this.drawer.toggle();
    this.appCommands.execute(AppCommand.EnterReadyCommand);
  }

  onNewScenarioClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.NewScenarioCommand);
  }

  onOpenScenarioClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.OpenScenarioCommand);
  }

  onSaveScenarioClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.SaveScenarioCommand);
  }

  onMaintainScenarioClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.MaintainScenarioCommand);
  }

  onScenarioContentClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.ScenarioContentCommand);
  }

  onDataResourceClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.DataResourceCommand);
  }

  onAnalysisTaskClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.AnalysisTaskCommand);
  }

  onBasemapResourceClick() {
    this.drawer.toggle();
    this.sidenav.toggle();
    this.appCommands.execute(AppCommand.BasemapResourceCommand);
  }


}
