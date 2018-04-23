import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
import { ToolBarService } from "./components/tool-bar/tool-bar.service";
/**
 * 应用程序组件
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  /**
   * 构造函数
   * @param service
   */
  constructor(
    private service: AppService,
    private elementRef: ElementRef,
    private toolbarService: ToolBarService
  ) {
    this.service.owner = this;
  }

  /**
   *
   */
  ngOnInit() {
    //初始化应用配置
    this.service.initAppSettings();
  }

  expandFlag = true;

  expandDataView() {
    let dataView = this.elementRef.nativeElement.querySelector(
      ".gisc-data-view-wrapper"
    );
    let expand = this.elementRef.nativeElement.querySelector(
      ".gisc-toggle__button--expand"
    );
    let text = expand.querySelector(".gisc-toggle__button--content");
    let icon = expand.querySelector("i");
    let iconClass = icon.getAttribute("class");
    // 将data-view调整显示方式
    if (this.expandFlag) {
      // 展开操作
      dataView.style.display = "block";
      text.innerText = "收回";
      icon.setAttribute("class", "fas fa-angle-double-down fa-lg");
    } else {
      // 收回操作
      dataView.style.display = "none";
      text.innerText = "展开";
      icon.setAttribute("class", "fas fa-angle-double-up fa-lg");
    }
    // 关闭现有打开的tool-bar项
    if (this.toolbarService.Action) {
      if (this.toolbarService.isAtlasAction) {
        this.toolbarService.isAtlasAction = false;
      }
      if (this.toolbarService.isLocationsAction) {
        this.toolbarService.isLocationsAction = false;
      }
      if (this.toolbarService.isNoticeAction) {
        this.toolbarService.isNoticeAction = false;
      }
      if (this.toolbarService.isRealTimeAction) {
        this.toolbarService.isRealTimeAction = false;
      }
      if (this.toolbarService.isUserAction) {
        this.toolbarService.isUserAction = false;
      }
      if (this.toolbarService.isUtilAction) {
        this.toolbarService.isUtilAction = false;
      }
    }
    this.expandFlag = !this.expandFlag;
  }

  /**
   * 菜单栏是否可视
   */
  public get isMenuBarVisible(): boolean {
    return this.service.isMenuBarVisible;
  }
  /**
   * 控制窗口是否可视
   */
  public get isConrolViewVisible(): boolean {
    return this.service.isConrolViewVisible;
  }
  @ViewChild("outerDrawer") outerDrawer: any;
  @ViewChild("innerDrawer") innerDrawer: any;

  /**
   * 切换control-view，同时控制图标箭头
   */
  toggle() {
    this.innerDrawer.toggle();
    let collapseIcon = this.elementRef.nativeElement.querySelector(
      ".gisc-toggle__button--collapse i"
    );
    let iconClass = collapseIcon.getAttribute("class");
    if (iconClass == "fas fa-caret-left fa-lg") {
      collapseIcon.setAttribute("class", "fas fa-caret-right fa-lg");
    } else {
      collapseIcon.setAttribute("class", "fas fa-caret-left fa-lg");
    }
  }
}
