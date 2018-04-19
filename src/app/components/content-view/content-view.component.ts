import { Component, OnInit } from '@angular/core';
import { ContentViewService } from './content-view.service';

/**
 *
 */
@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: ContentViewService) {
    this.service.owner = this;
  }

  ngOnInit() { }

}
