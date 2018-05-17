import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
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
  constructor(private service: ToolBarService,private elementRef:ElementRef) {
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

  ngOnInit() {}
  
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-locations');
      if(this.isLocationsAction&&!container.contains(e.srcElement)){
        this.service.isLocationsAction = false;
        document.onclick = null;
      }
    };
    
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-real-time');
      if(this.isRealTimeAction&&!container.contains(e.srcElement)){
        this.service.isRealTimeAction = false;
        document.onclick = null;
      }
    };
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-atlas');
      if(this.isAtlasAction&&!container.contains(e.srcElement)){
        this.service.isAtlasAction = false;
        document.onclick = null;
      }
    };
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-utils');
      if(this.isUtilAction&&!container.contains(e.srcElement)){
        this.service.isUtilAction = false;
        document.onclick = null;
      }
    };
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-notice');
      if(this.isNoticeAction&&!container.contains(e.srcElement)){
        this.service.isNoticeAction = false;
        document.onclick = null;
      }
    };
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
    document.onclick = e => {
      let container  = this.elementRef.nativeElement.querySelector('app-user');
      if(this.isUserAction&&!container.contains(e.srcElement)){
        this.service.isUserAction = false;
        document.onclick = null;
      }
    };
  }
}
