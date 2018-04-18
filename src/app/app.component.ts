import { Component, OnInit, Input, ElementRef,Renderer2 } from '@angular/core';
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

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('.gisc-map-view-wrapper').style.width = document.body.clientWidth + 'px'; 
    let collapse = document.getElementById('collapse');
    let expand = document.getElementById('expand');
    this.expandDataView(expand,true);
    this.collapseControlView(collapse,true);
    setTimeout(()=>{
      this.expandDataView(expand,false);
      this.collapseControlView(collapse,false);
    },2000) 
    setTimeout(()=>{
      this.expandDataView(expand,true);
      this.collapseControlView(collapse,true);
    },4000) 
  }

  shown: boolean = false;
  actionShown: boolean = false;
  collapseShown: boolean = false;
  topShown: boolean = false;
  viewState: boolean = false;
  menuBarShown: boolean = true;
  recMenuBarState(event) {
    this.menuBarShown = event;
  }

  recShown(event) {
    this.shown = event;
  }
  recActionShown(event) {
    this.actionShown = event;
    // this.collapseShown =event;
    // let data_view = document.getElementById('viewer-container');
    // if(data_view){
    //   if(this.actionShown==true){
    //     this.renderer.addClass(data_view,'gisc-data-view-content--overflow')
    //   }else{
    //     this.renderer.removeClass(data_view,'gisc-data-view-content--overflow')
    //   }
    // }
  }
  recViewState(event) {
    this.viewState = event;
  }

  recCollapseState(event) {
    this.collapseShown = event;
  }

  selectedMenuItem:number;
  recMenuItem(event){
    this.selectedMenuItem =event;
  }



  
  // 事件调用元素collapse按钮
  collapseControlView(collapse, collapseFlag){
    let controlView = this.elementRef.nativeElement.querySelector('.gisc-control-view-wrapper');
    // 同时将control-view和collapse调整显示位置
    if(collapseFlag){   // 还原操作 
      // controlView.style.display = '';
      controlView.style.marginLeft = '0';
      collapse.style.marginLeft = '0';
    }else{    // 折叠操作
      // controlView.style.display = 'none';
      controlView.style.marginLeft = '-410px';
      collapse.style.marginLeft = '-410px';
    }
  }

  
  // 事件调用元素expand按钮
  expandDataView(expand, expandFlag){
    let dataView = this.elementRef.nativeElement.querySelector('.gisc-data-view-wrapper');
    // 同时将data-view和expand调整显示位置
    if(expandFlag){   // 展开操作
      // dataView.style.display = '';
      dataView.style.bottom = '18px';
      expand.style.bottom = '198px';
    }else{    // 收回操作
      // dataView.style.display = 'none'
      dataView.style.bottom = '-180px';
      expand.style.bottom = '18px';
    }
  }




}
