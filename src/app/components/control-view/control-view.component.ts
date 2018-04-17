import { Component, OnInit, EventEmitter, Output, ViewChild, OnDestroy, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
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
  constructor(private service: ControlViewService,private elementRef:ElementRef,private renderer:Renderer2) {
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
    this.toggle(this.drawer)
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
  private _actions: { [key: string]: any; } = {
    "NewProject": () => {
      this.actionHost.createNewProjectComponent();
    },
    "OpenProject": () => {
      this.actionHost.createOpenProjectComponent();
    },
    "SaveProject": () => {
      this.actionHost.createSaveProjectComponent();
    },
    "MaintainProject": () => {
      this.actionHost.createMaintainProjectComponent();
    },
    "ProjectContent": () => {
      this.actionHost.createProjectContentComponent();
    },
    "DataResource": () => {
      this.actionHost.createDataResourceComponent();
    },
    "AnalysisTask": () => {
      this.actionHost.creatAnalysisTaskComponent();
    },
    "BasemapResource": () => {
      this.actionHost.createBasemapResourceComponent();
    }
  };

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


@ViewChild('drawer') drawer:ElementRef;
  flag = 0;
  toggle(drawer) {
    // console.log(this.nativeElement.querySelectorAll('.gisc-tool-bar-list .gisc-tool-bar-list__item'))
    // console.log(this.nativeElement.querySelectorAll('.gisc-tool-bar-list__item'))

    drawer.toggle();

    let wrapper: HTMLElement = this.elementRef.nativeElement.querySelector(
      ".gisc-control-view-wrapper"
    ).parentNode.parentNode;
    let toggle = this.elementRef.nativeElement.querySelector(".gisc-control-view-wrapper button");
    if (this.flag == 0) {
      this.flag = 1;
      this.renderer.removeClass(wrapper,'gisc-left-view-wrapper--is-unexpand');
      this.renderer.addClass(wrapper,'gisc-left-view-wrapper--is-expand');
      this.renderer.removeClass(toggle,'gisc-control-view-button--is-unexpand');
      this.renderer.addClass(toggle,'gisc-control-view-button--is-expand')
    } else {
      this.flag = 0;
      this.renderer.removeClass(wrapper,'gisc-left-view-wrapper--is-expand');
      this.renderer.addClass(wrapper,'gisc-left-view-wrapper--is-unexpand');
      this.renderer.removeClass(toggle,'gisc-control-view-button--is-expand');
      this.renderer.addClass(toggle,'gisc-control-view-button--is-unexpand')
    }
  }
}
