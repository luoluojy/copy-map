import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./app.service";
import { AppStatus } from "./app-status.enum";
/**
 * 应用程序主组件
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
  constructor(private service: AppService) {
    this.service.owner = this;
  }
  /**
   *
   */
  ngOnInit() {
    //初始化应用配置
    this.service.initAppSettings();
  }

  @ViewChild("outerDrawer") outerDrawer: any;
  @ViewChild("innerDrawer") innerDrawer: any;

  /**
   * 是否处于准备状态，菜单栏是否可视
   */
  public get isReadyStatus(): boolean {
    return this.service.isReadyStatus;
  }

  /**
   * 是否处于待命状态，菜单栏是否可视
   */
  public get isOrderStatus(): boolean {
    return this.service.isOrderStatus;
  }
  /**
   * 是否处于操作状态，控制窗口是否可视
   */
  public get isOperationStatus(): boolean {
    return this.service.isOperationStatus;
  }

  /**
   * 点击模态区域时，显示menu-bar
   */
  onClosedStart() {
    if (this.service.appStatus == AppStatus.Order) {
      this.service.exitOrderCommand();
    }
  }

  // 默认展开标志
  expandFlag = true;
  /**
   * 展开data-view
   * 通过模板引用变量获取data-view和其展开按钮
   * @param dataView
   * @param expandRef
   */
  expandDataView(dataView, expandRef) {
    let expand = expandRef._elementRef.nativeElement;
    let text = expand.querySelector(".gisc-toggle__button--content");
    let icon = expand.querySelector("i");
    let iconClass = icon.getAttribute("class");
    // 将data-view调整显示方式
    if (this.expandFlag) {
      // 展开操作
      dataView.style.display = "block";
      text.innerText = "收回";
      icon.innerText = 'keyboard_arrow_down';
    } else {
      // 收回操作
      dataView.style.display = "none";
      text.innerText = "展开";
      icon.innerText = 'keyboard_arrow_up'
    }
    this.expandFlag = !this.expandFlag;
  }

  /**
   * 切换control-view，同时控制图标箭头
   * @elementRef collapse按钮引用
   */
  toggle(collapseRef) {
    this.innerDrawer.toggle();
    let collapse = collapseRef._elementRef.nativeElement;
    let collapseIcon = collapse.querySelector("i");
    let iconClass = collapseIcon.getAttribute("class");
    if (iconClass == "fas fa-caret-left fa-lg") {
      collapseIcon.setAttribute("class", "fas fa-caret-right fa-lg");
    } else {
      collapseIcon.setAttribute("class", "fas fa-caret-left fa-lg");
    }
  }
}
