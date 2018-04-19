import { Component, OnInit, Input, ElementRef,Renderer2, ViewChild } from '@angular/core';
import { AppService } from './app.service';

/**
 * 应用程序组件
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: AppService,private elementRef:ElementRef,private renderer:Renderer2) {
    this.service.owner = this;
  }

  /**
   *
   */
  ngOnInit() {
    //初始化应用配置
    this.service.initAppSettings();
  }


  @ViewChild('sidenav') sidenav:any;

  recActionShown(event) {
    this.sidenav.toggle();
  }

  expandFlag=true;
  // 事件调用元素expand按钮
  expandDataView(){
    let dataView = this.elementRef.nativeElement.querySelector('.gisc-data-view-wrapper');
    // 将data-view调整显示方式
    if(this.expandFlag){   // 展开操作
      dataView.style.display = 'block';
    }else{    // 收回操作
      dataView.style.display = 'none'
    }
    this.expandFlag=!this.expandFlag;
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

}
