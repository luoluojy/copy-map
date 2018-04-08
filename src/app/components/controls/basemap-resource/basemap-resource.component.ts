import { Component, OnInit } from '@angular/core';
import { BasemapResourceService } from './basemap-resource.service';

/**
 * 地理底图组件
 */
@Component({
  selector: 'app-basemap-resource',
  templateUrl: './basemap-resource.component.html',
  styleUrls: ['./basemap-resource.component.css']
})
export class BasemapResourceComponent implements OnInit {

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: BasemapResourceService) {
    this.service.owner = this;
  }

  ngOnInit() {
  }

}
