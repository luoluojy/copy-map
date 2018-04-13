import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private service: AppService) {
    this.service.owner = this;
  }

  ngOnInit() {}

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
    this.collapseShown = event;
  }
  recViewState(event) {
    this.viewState = event;
  }

  recCollapseState(event) {
    this.collapseShown = event
  }

}
