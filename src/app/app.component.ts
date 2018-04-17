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
    let data_view = document.getElementById('viewer-container');
    if(data_view){
      if(this.actionShown==true){
        this.renderer.addClass(data_view,'gisc-data-view-content--overflow')
      }else{
        this.renderer.removeClass(data_view,'gisc-data-view-content--overflow')
      }
    }
  }
  recViewState(event) {
    this.viewState = event;
  }

  recCollapseState(event) {
    this.collapseShown = event
  }

  selectedMenuItem:number;
  recMenuItem(event){
    this.selectedMenuItem =event;
  }

}
