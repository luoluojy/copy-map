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

  ngOnInit() { }

  actionShown: boolean = false;
  collapseShown: boolean = false;
  menuBarShown: boolean = true;
  @ViewChild('sidenav') sidenav:any;

  recActionShown(event) {
    this.actionShown = event;
    this.collapseShown =event;
    this.menuBarShown = !event;
      this.sidenav.toggle();
  }

  // 事件调用元素collapse按钮
  collapseControlView(collapseFlag){
    let controlView = this.elementRef.nativeElement.querySelector('.gisc-control-view-wrapper');
    // 同时将control-view和collapse调整显示位置
    if(collapseFlag){   // 还原操作 
      controlView.style.display = '';
    }else{    // 折叠操作
      controlView.style.display = 'none';
    }
  }

  expandFlag=true;
  // 事件调用元素expand按钮
  expandDataView(){
    let dataView = this.elementRef.nativeElement.querySelector('.gisc-data-view-wrapper');
    // 同时将data-view和expand调整显示位置
    if(this.expandFlag){   // 展开操作
      dataView.style.display = 'block';
    }else{    // 收回操作
      dataView.style.display = 'none'
    }
    this.expandFlag=!this.expandFlag;
  }


}
