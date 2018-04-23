import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  Input
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ControlViewDirective } from "./control-view.directive";
import { ControlViewService } from "./control-view.service";
import { ControlViewStatus } from "./control-view-status.enum";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MenuComponent } from "../menu/menu.component";
import { AppCommandService } from "../../app-command.service";

import { AppCommand } from "../../app-command.enum";
/**
 * 功能控制视图组件
 */
@Component({
  selector: "app-control-view",
  templateUrl: "./control-view.component.html",
  styleUrls: ["./control-view.component.css"]
})
export class ControlViewComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * 功能区创建指令
   */
  @ViewChild(ControlViewDirective) actionHost: ControlViewDirective;

  /**
   * 构造函数
   * @param service
   */
  constructor(
    private service: ControlViewService,
    private dialog: MatDialog,
    private appCommands: AppCommandService
  ) {
    this.service.owner = this;
    this._actionStatus = this.service.actionStatus;
  }
  /**
   *
   */
  ngOnInit(): void {}
  /**
   *
   */
  ngAfterViewInit(): void {
    this.createActionComponent(this.actionStatus);
  }
  /**
   *
   */
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
  /**
   * 控件功能状态
   */
  private _actionStatus: ControlViewStatus;
  public get actionStatus(): ControlViewStatus {
    return this._actionStatus;
  }
  public set actionStatus(value: ControlViewStatus) {
    this._actionStatus = value;
    this.createActionComponent(value);
  }
  /**
   * 活动功能标题
   */
  public get actionTile() {
    return this.service.actionTile;
  }
  /**
   * 创建组件
   * @param action
   */
  private createActionComponent(action: ControlViewStatus) {
    var key: string = ControlViewStatus[action];
    var func = this._actions[key];
    if (func != undefined) {
      func();
    }
  }
  /**
   * 活动组件创建字典
   */
  private _actions: { [key: string]: any } = {
    NewScenario: () => {
      this.actionHost.createNewScenarioComponent();
    },
    OpenScenario: () => {
      this.actionHost.createOpenScenarioComponent();
    },
    SaveScenario: () => {
      this.actionHost.createSaveScenarioComponent();
    },
    MaintainScenario: () => {
      this.actionHost.createMaintainScenarioComponent();
    },
    ScenarioContent: () => {
      this.actionHost.createScenarioContentComponent();
    },
    DataResource: () => {
      this.actionHost.createDataResourceComponent();
    },
    AnalysisTask: () => {
      this.actionHost.creatAnalysisTaskComponent();
    },
    BasemapResource: () => {
      this.actionHost.createBasemapResourceComponent();
    }
  };

 
  @Input() outerDrawer:any;
  @Input() innerDrawer:any;
  
  closeControlView() {
    this.innerDrawer.toggle();
    this.appCommands.execute(AppCommand.EnterReadyCommand);
  }

  openMenuPanel() {
    this.innerDrawer.toggle();
    this.outerDrawer.toggle();
    let modal =  <HTMLElement>document.getElementsByClassName('gisc-modal')[0];
    modal.style.visibility = 'visible';  
  }
}
