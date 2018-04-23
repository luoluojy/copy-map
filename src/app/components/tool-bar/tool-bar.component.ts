import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ToolBarService } from "./tool-bar.service";

/**
 * 工具栏组件
 */
@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.css"]
})
export class ToolBarComponent implements OnInit {
  /**
   * 构造函数
   * @param service
   */
  constructor(private service: ToolBarService) {
    this.service.owner = this;
  }

  /**
   * 定位栏活动状态
   */
  public get isLocationsAction() {
    return this.service.isLocationsAction;
  }
  public set isLocationsAction(value: boolean) {
    this.service.isLocationsAction = value;
  }
  /**
   * 实时栏活动状态
   */
  public get isRealTimeAction() {
    return this.service.isRealTimeAction;
  }
  public set isRealTimeAction(value: boolean) {
    this.service.isRealTimeAction = value;
  }
  /**
   * 图册栏活动状态
   */
  public get isAtlasAction() {
    return this.service.isAtlasAction;
  }
  public set isAtlasAction(value: boolean) {
    this.service.isAtlasAction = value;
  }
  /**
   * 地图工具活动状态
   */
  public get isUtilAction() {
    return this.service.isUtilAction;
  }
  public set isUtilAction(value: boolean) {
    this.service.isUtilAction = value;
  }
  /**
   * 通知活动状态
   */
  public get isNoticeAction() {
    return this.service.isNoticeAction;
  }
  public set isNoticeAction(value: boolean) {
    this.service.isNoticeAction = value;
  }
  /**
   * 用户中心活动状态
   */
  public get isUserAction() {
    return this.service.isUserAction;
  }
  public set isUserAction(value: boolean) {
    this.service.isUserAction = value;
  }

  ngOnInit() { }

  /**
   *
   */
  onLocationsClick() {
    this.service.isLocationsAction = !this.service.isLocationsAction;
  }
  /**
   *
   */
  onLocationsBlur() {
    this.service.isLocationsAction = false;
  }
  /**
   *
   */
  onRealTimeClick() {
    this.service.isRealTimeAction = !this.service.isRealTimeAction;
  }
  /**
   *
   */
  onRealTimeBlur() {
    this.service.isRealTimeAction = false;
  }
  /**
   *
   */
  onAtlasClick() {
    this.service.isAtlasAction = !this.service.isAtlasAction;
  }
   /**
   *
   */
  onAtlasBlur() {
    this.service.isAtlasAction = false;
  }
  /**
   *
   */
  onUtilsClick() {
    this.service.isUtilAction = !this.service.isUtilAction;
  }
  /**
   *
   */
  onUtilsBlur() {
    this.service.isUtilAction = false;
  }
  /**
   *
   */
  onNoticeClick() {
    this.service.isNoticeAction = !this.service.isNoticeAction;
  }
  /**
   *
   */
  onNoticeBlur() {
    this.service.isNoticeAction = false;
  }
  /**
   *
   */
  onUserClick() {
    this.service.isUserAction = !this.service.isUserAction;
  }
  /**
   *
   */
  onUserBlur() {
    this.service.isUserAction = false;
  }
}
