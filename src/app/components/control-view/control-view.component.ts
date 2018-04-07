import { Component, OnInit, EventEmitter, Output, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ControlViewDirective } from './control-view.directive';
import { ControlViewService } from './control-view.service';
import { ControlViewStatus } from './control-view-status.enum';

/**
 * 功能控制视图组件
 */
@Component({
  selector: 'app-control-view',
  templateUrl: './control-view.component.html',
  styleUrls: ['./control-view.component.css']
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
  constructor(private service: ControlViewService) {
    this.service.owner = this;
    this._actionStatus = this.service.actionStatus;
  }
  /**
   *
   */
  ngOnInit(): void { }
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
    switch (action) {
      case ControlViewStatus.NewProject:
        this.createNewProjectComponent();
        break;
      case ControlViewStatus.OpenProject:
        this.createOpenProjectComponent();
        break;
      case ControlViewStatus.MaintainProject:
        this.createMaintainProjectComponent();
        break;
      case ControlViewStatus.ProjectContent:
        this.createProjectContentComponent()
        break;
    }
  }
  /**
   * 创建新建项目组件
   */
  private createNewProjectComponent() {
    this.actionHost.createNewProjectComponent();
  }
  /**
   * 创建打开项目组件
   */
  private createOpenProjectComponent() {
    this.actionHost.createOpenProjectComponent();
  }
  /**
   * 创建项目管理组件
   */
  private createMaintainProjectComponent() {
    this.actionHost.createMaintainProjectComponent();
  }
  /**
   * 创建项目内容组件
   */
  private createProjectContentComponent() {
    this.actionHost.createProjectContentComponent();
  }

  @Output() actionCloseEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() actionMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() menuBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();





  closeControlView() {

    this.actionCloseEmitter.emit(false);
    this.menuBarEmitter.emit(true)

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }

  reOpenMenu() {

    this.actionMenuEmitter.emit(true);
    this.actionCloseEmitter.emit(false);

    let distance_legend = <HTMLElement>document.getElementsByClassName('distance-legend')[0];
    let distanceLegendLeft = window.getComputedStyle(distance_legend, null).left;
    distance_legend.style.left = parseInt(distanceLegendLeft.substr(0, distanceLegendLeft.length - 2), 10) - 410 + 'px'
  }
}
