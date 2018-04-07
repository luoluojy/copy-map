import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, Type, AfterViewInit } from '@angular/core';
import { MapViewDirective } from './map-view.directive';
import { MapViewService } from './map-view.service';

/**
 * 地图视图
 */
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy, AfterViewInit {

  /**
   * 地图创建指令
   */
  @ViewChild(MapViewDirective) mapHost: MapViewDirective;

  /**
   * 构造函数
   * @param service
   */
  constructor(private service: MapViewService) {
    this.service.owner = this;
  }

  ngOnInit() {
    // this.loadComponent();
  }

  ngOnDestroy() {

  }

  /**
   *
   */
  ngAfterViewInit() {
    this.mapHost.CreateCesium();
  }

}
